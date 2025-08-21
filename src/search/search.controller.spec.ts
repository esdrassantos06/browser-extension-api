import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { SearchExtensionDto } from './dto/search-extension.dto';

describe('SearchController', () => {
  let controller: SearchController;
  let searchService: SearchService;

  const mockSearchService = {
    search: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        {
          provide: SearchService,
          useValue: mockSearchService,
        },
      ],
    }).compile();

    controller = module.get<SearchController>(SearchController);
    searchService = module.get<SearchService>(SearchService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('search', () => {
    const mockExtensions = [
      {
        id: '1',
        name: 'Test Extension',
        description: 'A test extension',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Another Extension',
        description: 'Another test extension',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const searchQuery: SearchExtensionDto = {
      query: 'test',
    };

    it('should search extensions successfully', async () => {
      mockSearchService.search.mockResolvedValue(mockExtensions);

      const result = await controller.search(searchQuery);

      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
      expect(result).toEqual(mockExtensions);
    });

    it('should return empty array when no extensions found', async () => {
      mockSearchService.search.mockResolvedValue([]);

      const result = await controller.search(searchQuery);

      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
      expect(result).toEqual([]);
    });

    it('should handle case-insensitive search query', async () => {
      const upperCaseQuery: SearchExtensionDto = { query: 'TEST' };
      mockSearchService.search.mockResolvedValue(mockExtensions);

      const result = await controller.search(upperCaseQuery);

      expect(searchService.search).toHaveBeenCalledWith(upperCaseQuery);
      expect(result).toEqual(mockExtensions);
    });

    it('should handle special characters in search query', async () => {
      const specialCharQuery: SearchExtensionDto = { query: 'test@#$%' };
      mockSearchService.search.mockResolvedValue([]);

      const result = await controller.search(specialCharQuery);

      expect(searchService.search).toHaveBeenCalledWith(specialCharQuery);
      expect(result).toEqual([]);
    });

    it('should handle empty search query', async () => {
      const emptyQuery: SearchExtensionDto = { query: '' };
      mockSearchService.search.mockResolvedValue([]);

      const result = await controller.search(emptyQuery);

      expect(searchService.search).toHaveBeenCalledWith(emptyQuery);
      expect(result).toEqual([]);
    });

    it('should handle whitespace-only search query', async () => {
      const whitespaceQuery: SearchExtensionDto = { query: '   ' };
      mockSearchService.search.mockResolvedValue([]);

      const result = await controller.search(whitespaceQuery);

      expect(searchService.search).toHaveBeenCalledWith(whitespaceQuery);
      expect(result).toEqual([]);
    });

    it('should handle long search query', async () => {
      const longQuery: SearchExtensionDto = {
        query: 'a'.repeat(1000),
      };
      mockSearchService.search.mockResolvedValue([]);

      const result = await controller.search(longQuery);

      expect(searchService.search).toHaveBeenCalledWith(longQuery);
      expect(result).toEqual([]);
    });

    it('should propagate BadRequestException from service', async () => {
      const errorMessage = 'Failed to search extensions';
      mockSearchService.search.mockRejectedValue(
        new BadRequestException(errorMessage),
      );

      await expect(controller.search(searchQuery)).rejects.toThrow(
        BadRequestException,
      );
      await expect(controller.search(searchQuery)).rejects.toThrow(
        errorMessage,
      );
      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
    });

    it('should propagate generic errors from service', async () => {
      const errorMessage = 'Database connection failed';
      mockSearchService.search.mockRejectedValue(new Error(errorMessage));

      await expect(controller.search(searchQuery)).rejects.toThrow(Error);
      await expect(controller.search(searchQuery)).rejects.toThrow(
        errorMessage,
      );
      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
    });

    it('should handle single extension result', async () => {
      const singleExtension = [mockExtensions[0]];
      mockSearchService.search.mockResolvedValue(singleExtension);

      const result = await controller.search(searchQuery);

      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
      expect(result).toEqual(singleExtension);
      expect(result).toHaveLength(1);
    });

    it('should handle multiple extensions result', async () => {
      const multipleExtensions = [
        mockExtensions[0],
        mockExtensions[1],
        {
          id: '3',
          name: 'Third Extension',
          description: 'Third test extension',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      mockSearchService.search.mockResolvedValue(multipleExtensions);

      const result = await controller.search(searchQuery);

      expect(searchService.search).toHaveBeenCalledWith(searchQuery);
      expect(result).toEqual(multipleExtensions);
      expect(result).toHaveLength(3);
    });

    it('should handle search query with numbers', async () => {
      const numericQuery: SearchExtensionDto = { query: 'extension123' };
      mockSearchService.search.mockResolvedValue(mockExtensions);

      const result = await controller.search(numericQuery);

      expect(searchService.search).toHaveBeenCalledWith(numericQuery);
      expect(result).toEqual(mockExtensions);
    });

    it('should handle search query with mixed case', async () => {
      const mixedCaseQuery: SearchExtensionDto = { query: 'TeSt ExTeNsIoN' };
      mockSearchService.search.mockResolvedValue(mockExtensions);

      const result = await controller.search(mixedCaseQuery);

      expect(searchService.search).toHaveBeenCalledWith(mixedCaseQuery);
      expect(result).toEqual(mockExtensions);
    });
  });
});
