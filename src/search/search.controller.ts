import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreateExtensionDto } from 'src/extensions/dto/create-extension.dto';
import { SearchExtensionDto } from './dto/search-extension.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Throttle({ default: { limit: 50, ttl: 60 * 1000 } })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Extensions searched',
    type: [CreateExtensionDto],
  })
  search(@Query() query: SearchExtensionDto) {
    return this.searchService.search(query);
  }
}
