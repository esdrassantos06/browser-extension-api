import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreateExtensionDto } from 'src/extensions/dto/create-extension.dto';
import { SearchExtensionDto } from './dto/search-extension.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

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
