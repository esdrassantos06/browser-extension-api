import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ExtensionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createExtensionDto: CreateExtensionDto) {
    try {
      return this.databaseService.extension.create({
        data: createExtensionDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException(`Extension already exists`);
        }
        throw new BadRequestException('Failed to create extension');
      }
      throw error;
    }
  }

  async findAll() {
    try {
      return this.databaseService.extension.findMany();
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException('Failed to retrieve extensions');
      }
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const extension = await this.databaseService.extension.findUnique({
        where: { id },
      });

      if (!extension) {
        throw new NotFoundException(`Extension with id ${id} not found`);
      }

      return extension;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException('Failed to retrieve extension');
      }
      throw error;
    }
  }

  async update(id: string, updateExtensionDto: UpdateExtensionDto) {
    try {
      return await this.databaseService.extension.update({
        where: { id },
        data: updateExtensionDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Extension with id ${id} not found`);
        }
        throw new BadRequestException('Failed to update extension');
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.databaseService.extension.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Extension with id ${id} not found`);
        }
        throw new BadRequestException('Failed to delete extension');
      }
      throw error;
    }
  }

  async activate(id: string) {
    try {
      return await this.databaseService.extension.update({
        where: { id },
        data: { active: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Extension with id ${id} not found`);
        }
        throw new BadRequestException('Failed to activate extension');
      }
      throw error;
    }
  }

  async deactivate(id: string) {
    try {
      return await this.databaseService.extension.update({
        where: { id },
        data: { active: false },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Extension with id ${id} not found`);
        }
        throw new BadRequestException('Failed to deactivate extension');
      }
      throw error;
    }
  }
}
