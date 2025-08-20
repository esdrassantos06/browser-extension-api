import { Test, TestingModule } from '@nestjs/testing';
import { ExtensionsController } from './extensions.controller';
import { ExtensionsService } from './extensions.service';

describe('ExtensionsController', () => {
  let controller: ExtensionsController;
  let mockExtensionsService: {
    create: jest.Mock;
    findAll: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
    activate: jest.Mock;
    deactivate: jest.Mock;
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
    mockExtensionsService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      activate: jest.fn(),
      deactivate: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtensionsController],
      providers: [
        {
          provide: ExtensionsService,
          useValue: mockExtensionsService,
        },
      ],
    }).compile();

    controller = module.get<ExtensionsController>(ExtensionsController);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create (POST /extensions)', () => {
    it('should create a new extension', async () => {
      const createDto = {
        name: 'Test Extension',
        description: 'Test Description',
      };

      mockExtensionsService.create.mockResolvedValue(mockExtension);

      const result = await controller.create(createDto);

      expect(mockExtensionsService.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockExtension);
    });

    it('should handle service errors during creation', async () => {
      const createDto = {
        name: 'Test Extension',
      };

      const error = new Error('Service error');
      mockExtensionsService.create.mockRejectedValue(error);

      await expect(controller.create(createDto)).rejects.toThrow(
        'Service error',
      );
    });
  });

  describe('findAll (GET /extensions)', () => {
    it('should return all extensions', async () => {
      const mockPaginationDto = {
        page: 1,
        limit: 10,
      };

      const extensions = [mockExtension];
      mockExtensionsService.findAll.mockResolvedValue(extensions);

      const result = await controller.findAll(mockPaginationDto);

      expect(mockExtensionsService.findAll).toHaveBeenCalled();
      expect(result).toEqual(extensions);
    });

    it('should return empty array when no extensions exist', async () => {
      const mockPaginationDto = {
        page: 1,
        limit: 10,
      };

      mockExtensionsService.findAll.mockResolvedValue([]);

      const result = await controller.findAll(mockPaginationDto);

      expect(result).toEqual([]);
    });

    it('should handle service errors', async () => {
      const mockPaginationDto = {
        page: 1,
        limit: 10,
      };

      const error = new Error('Service error');
      mockExtensionsService.findAll.mockRejectedValue(error);

      await expect(controller.findAll(mockPaginationDto)).rejects.toThrow(
        'Service error',
      );
    });
  });

  describe('findOne (GET /extensions/:id)', () => {
    it('should return a single extension by id', async () => {
      const id = 'test-id';
      mockExtensionsService.findOne.mockResolvedValue(mockExtension);

      const result = await controller.findOne(id);

      expect(mockExtensionsService.findOne).toHaveBeenCalledWith(id);
      expect(result).toEqual(mockExtension);
    });

    it('should return null when extension not found', async () => {
      const id = 'non-existent-id';
      mockExtensionsService.findOne.mockResolvedValue(null);

      const result = await controller.findOne(id);

      expect(mockExtensionsService.findOne).toHaveBeenCalledWith(id);
      expect(result).toEqual(null);
    });

    it('should handle service errors', async () => {
      const id = 'test-id';
      const error = new Error('Service error');
      mockExtensionsService.findOne.mockRejectedValue(error);

      await expect(controller.findOne(id)).rejects.toThrow('Service error');
    });
  });

  describe('update (PUT /extensions/:id)', () => {
    it('should update an extension', async () => {
      const id = 'test-id';
      const updateDto = {
        name: 'Updated Extension',
        description: 'Updated Description',
      };

      const updatedExtension = { ...mockExtension, ...updateDto };
      mockExtensionsService.update.mockResolvedValue(updatedExtension);

      const result = await controller.update(id, updateDto);

      expect(mockExtensionsService.update).toHaveBeenCalledWith(id, updateDto);
      expect(result).toEqual(updatedExtension);
    });

    it('should handle service errors during update', async () => {
      const id = 'test-id';
      const updateDto = {
        name: 'Updated Extension',
      };

      const error = new Error('Update failed');
      mockExtensionsService.update.mockRejectedValue(error);

      await expect(controller.update(id, updateDto)).rejects.toThrow(
        'Update failed',
      );
    });
  });

  describe('remove (DELETE /extensions/:id)', () => {
    it('should delete an extension', async () => {
      const id = 'test-id';
      mockExtensionsService.remove.mockResolvedValue(mockExtension);

      const result = await controller.remove(id);

      expect(mockExtensionsService.remove).toHaveBeenCalledWith(id);
      expect(result).toEqual(mockExtension);
    });

    it('should handle service errors during deletion', async () => {
      const id = 'test-id';
      const error = new Error('Delete failed');
      mockExtensionsService.remove.mockRejectedValue(error);

      await expect(controller.remove(id)).rejects.toThrow('Delete failed');
    });
  });

  describe('activate (POST /extensions/:id/activate)', () => {
    it('should activate an extension', async () => {
      const id = 'test-id';
      const activatedExtension = { ...mockExtension, active: true };
      mockExtensionsService.activate.mockResolvedValue(activatedExtension);

      const result = await controller.activate(id);

      expect(mockExtensionsService.activate).toHaveBeenCalledWith(id);
      expect(result).toEqual(activatedExtension);
    });

    it('should handle service errors during activation', async () => {
      const id = 'test-id';
      const error = new Error('Activation failed');
      mockExtensionsService.activate.mockRejectedValue(error);

      await expect(controller.activate(id)).rejects.toThrow(
        'Activation failed',
      );
    });
  });

  describe('deactivate (POST /extensions/:id/deactivate)', () => {
    it('should deactivate an extension', async () => {
      const id = 'test-id';
      const deactivatedExtension = { ...mockExtension, active: false };
      mockExtensionsService.deactivate.mockResolvedValue(deactivatedExtension);

      const result = await controller.deactivate(id);

      expect(mockExtensionsService.deactivate).toHaveBeenCalledWith(id);
      expect(result).toEqual(deactivatedExtension);
    });

    it('should handle service errors during deactivation', async () => {
      const id = 'test-id';
      const error = new Error('Deactivation failed');
      mockExtensionsService.deactivate.mockRejectedValue(error);

      await expect(controller.deactivate(id)).rejects.toThrow(
        'Deactivation failed',
      );
    });
  });
});
