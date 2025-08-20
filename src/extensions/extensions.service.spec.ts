import { Test, TestingModule } from '@nestjs/testing';
import { ExtensionsService } from './extensions.service';
import { DatabaseService } from '../database/database.service';

describe('ExtensionsService', () => {
  let service: ExtensionsService;
  let mockDatabaseService: {
    extension: {
      create: jest.Mock;
      findMany: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
  };

  const mockExtension = {
    id: 'test-id',
    name: 'Test Extension',
    description: 'Test Description',
    active: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    mockDatabaseService = {
      extension: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExtensionsService,
        {
          provide: DatabaseService,
          useValue: mockDatabaseService,
        },
      ],
    }).compile();

    service = module.get<ExtensionsService>(ExtensionsService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new extension', async () => {
      const createDto = {
        name: 'Test Extension',
        description: 'Test Description',
      };

      mockDatabaseService.extension.create.mockResolvedValue(mockExtension);

      const result = await service.create(createDto);

      expect(mockDatabaseService.extension.create).toHaveBeenCalledWith({
        data: createDto,
      });
      expect(result).toEqual(mockExtension);
    });

    it('should handle database errors during creation', async () => {
      const createDto = {
        name: 'Test Extension',
      };

      const error = new Error('Database error');
      mockDatabaseService.extension.create.mockRejectedValue(error);

      await expect(service.create(createDto)).rejects.toThrow('Database error');
    });
  });

  describe('findAll', () => {
    it('should return all extensions', async () => {
      const extensions = [mockExtension];
      mockDatabaseService.extension.findMany.mockResolvedValue(extensions);

      const result = await service.findAll();

      expect(mockDatabaseService.extension.findMany).toHaveBeenCalled();
      expect(result).toEqual(extensions);
    });

    it('should return empty array when no extensions exist', async () => {
      mockDatabaseService.extension.findMany.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a single extension by id', async () => {
      const id = 'test-id';
      mockDatabaseService.extension.findUnique.mockResolvedValue(mockExtension);

      const result = await service.findOne(id);

      expect(mockDatabaseService.extension.findUnique).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(mockExtension);
    });

    it('should return null when extension not found', async () => {
      const id = 'non-existent-id';
      mockDatabaseService.extension.findUnique.mockResolvedValue(null);

      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update an extension', async () => {
      const id = 'test-id';
      const updateDto = {
        name: 'Updated Extension',
        description: 'Updated Description',
      };

      const updatedExtension = { ...mockExtension, ...updateDto };
      mockDatabaseService.extension.update.mockResolvedValue(updatedExtension);

      const result = await service.update(id, updateDto);

      expect(mockDatabaseService.extension.update).toHaveBeenCalledWith({
        where: { id },
        data: updateDto,
      });
      expect(result).toEqual(updatedExtension);
    });

    it('should handle database errors during update', async () => {
      const id = 'test-id';
      const updateDto = {
        name: 'Updated Extension',
      };

      const error = new Error('Update failed');
      mockDatabaseService.extension.update.mockRejectedValue(error);

      await expect(service.update(id, updateDto)).rejects.toThrow(
        'Update failed',
      );
    });
  });

  describe('remove', () => {
    it('should delete an extension', async () => {
      const id = 'test-id';
      mockDatabaseService.extension.delete.mockResolvedValue(mockExtension);

      const result = await service.remove(id);

      expect(mockDatabaseService.extension.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(mockExtension);
    });

    it('should handle database errors during deletion', async () => {
      const id = 'test-id';
      const error = new Error('Delete failed');
      mockDatabaseService.extension.delete.mockRejectedValue(error);

      await expect(service.remove(id)).rejects.toThrow('Delete failed');
    });
  });

  describe('activate', () => {
    it('should activate an extension', async () => {
      const id = 'test-id';
      const activatedExtension = { ...mockExtension, active: true };
      mockDatabaseService.extension.update.mockResolvedValue(
        activatedExtension,
      );

      const result = await service.activate(id);

      expect(mockDatabaseService.extension.update).toHaveBeenCalledWith({
        where: { id },
        data: { active: true },
      });
      expect(result).toEqual(activatedExtension);
    });
  });

  describe('deactivate', () => {
    it('should deactivate an extension', async () => {
      const id = 'test-id';
      const deactivatedExtension = { ...mockExtension, active: false };
      mockDatabaseService.extension.update.mockResolvedValue(
        deactivatedExtension,
      );

      const result = await service.deactivate(id);

      expect(mockDatabaseService.extension.update).toHaveBeenCalledWith({
        where: { id },
        data: { active: false },
      });
      expect(result).toEqual(deactivatedExtension);
    });
  });
});
