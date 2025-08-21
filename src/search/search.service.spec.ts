import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { SearchService } from './search.service';
import { SearchExtensionDto } from './dto/search-extension.dto';

describe('SearchService', () => {
  let service: SearchService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    extension: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<SearchService>(SearchService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

    it('should search extensions by name and description', async () => {
      mockPrismaService.extension.findMany.mockResolvedValue(mockExtensions);

      const result = await service.search(searchQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: searchQuery.query, mode: 'insensitive' } },
            {
              description: { contains: searchQuery.query, mode: 'insensitive' },
            },
          ],
        },
      });
      expect(result).toEqual(mockExtensions);
    });

    it('should return empty array when no extensions found', async () => {
      mockPrismaService.extension.findMany.mockResolvedValue([]);

      const result = await service.search(searchQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: searchQuery.query, mode: 'insensitive' } },
            {
              description: { contains: searchQuery.query, mode: 'insensitive' },
            },
          ],
        },
      });
      expect(result).toEqual([]);
    });

    it('should handle case-insensitive search', async () => {
      const upperCaseQuery: SearchExtensionDto = { query: 'TEST' };
      mockPrismaService.extension.findMany.mockResolvedValue(mockExtensions);

      await service.search(upperCaseQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: upperCaseQuery.query, mode: 'insensitive' } },
            {
              description: {
                contains: upperCaseQuery.query,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
    });

    it('should handle special characters in search query', async () => {
      const specialCharQuery: SearchExtensionDto = { query: 'test@#$%' };
      mockPrismaService.extension.findMany.mockResolvedValue([]);

      await service.search(specialCharQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: specialCharQuery.query, mode: 'insensitive' } },
            {
              description: {
                contains: specialCharQuery.query,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
    });

    it('should throw BadRequestException when PrismaClientKnownRequestError occurs', async () => {
      const prismaError = new Prisma.PrismaClientKnownRequestError(
        'Database error',
        {
          code: 'P2002',
          clientVersion: '1.0.0',
        },
      );
      mockPrismaService.extension.findMany.mockRejectedValue(prismaError);

      await expect(service.search(searchQuery)).rejects.toThrow(
        BadRequestException,
      );
      await expect(service.search(searchQuery)).rejects.toThrow(
        'Failed to search extensions',
      );
    });

    it('should re-throw non-Prisma errors', async () => {
      const genericError = new Error('Generic error');
      mockPrismaService.extension.findMany.mockRejectedValue(genericError);

      await expect(service.search(searchQuery)).rejects.toThrow(
        'Generic error',
      );
    });

    it('should handle empty search query', async () => {
      const emptyQuery: SearchExtensionDto = { query: '' };
      mockPrismaService.extension.findMany.mockResolvedValue([]);

      const result = await service.search(emptyQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: emptyQuery.query, mode: 'insensitive' } },
            {
              description: { contains: emptyQuery.query, mode: 'insensitive' },
            },
          ],
        },
      });
      expect(result).toEqual([]);
    });

    it('should handle whitespace-only search query', async () => {
      const whitespaceQuery: SearchExtensionDto = { query: '   ' };
      mockPrismaService.extension.findMany.mockResolvedValue([]);

      const result = await service.search(whitespaceQuery);

      expect(prismaService.extension.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { name: { contains: whitespaceQuery.query, mode: 'insensitive' } },
            {
              description: {
                contains: whitespaceQuery.query,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      expect(result).toEqual([]);
    });
  });
});
