import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { SearchExtensionDto } from './dto/search-extension.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private readonly databaseService: PrismaService) {}

  async search(query: SearchExtensionDto) {
    try {
      const extensions = await this.databaseService.extension.findMany({
        where: {
          OR: [
            { name: { contains: query.query, mode: 'insensitive' } },
            { description: { contains: query.query, mode: 'insensitive' } },
          ],
        },
      });
      return extensions;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException('Failed to search extensions');
      }
      throw error;
    }
  }
}
