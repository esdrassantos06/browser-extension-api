import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExtensionsService } from './extensions.service';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindAllExtensionsDto } from './dto/find-all-extensions.dto';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Extensions')
@Controller('extensions')
export class ExtensionsController {
  constructor(private readonly extensionsService: ExtensionsService) {}

  @Post()
  @ApiBody({ type: CreateExtensionDto })
  @ApiResponse({
    status: 201,
    description: 'Extension created',
    type: CreateExtensionDto,
  })
  create(@Body() createExtensionDto: CreateExtensionDto) {
    return this.extensionsService.create(createExtensionDto);
  }

  @Throttle({ default: { limit: 50, ttl: 60 * 1000 } })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Extensions fetched',
    schema: {
      type: 'object',
      properties: {
        page: { type: 'number' },
        limit: { type: 'number' },
        extensions: { type: 'array' },
        totalExtensions: { type: 'number' },
        totalPages: { type: 'number' },
      },
    },
  })
  findAll(@Query() queryDto: FindAllExtensionsDto) {
    const { active, ...paginationDto } = queryDto;
    return this.extensionsService.findAll(paginationDto, active);
  }

  @Throttle({ default: { limit: 50, ttl: 60 * 1000 } })
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Extension fetched',
    type: CreateExtensionDto,
  })
  findOne(@Param('id') id: string) {
    return this.extensionsService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateExtensionDto })
  @ApiResponse({
    status: 200,
    description: 'Extension updated',
    type: UpdateExtensionDto,
  })
  update(
    @Param('id') id: string,
    @Body() updateExtensionDto: UpdateExtensionDto,
  ) {
    return this.extensionsService.update(id, updateExtensionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Extension deleted',
    type: UpdateExtensionDto,
  })
  remove(@Param('id') id: string) {
    return this.extensionsService.remove(id);
  }

  @Patch(':id/activate')
  @ApiResponse({
    status: 200,
    description: 'Extension activated (active: true)',
    type: UpdateExtensionDto,
  })
  activate(@Param('id') id: string) {
    return this.extensionsService.activate(id);
  }

  @Patch(':id/deactivate')
  @ApiResponse({
    status: 200,
    description: 'Extension deactivated (active: false)',
    type: UpdateExtensionDto,
  })
  deactivate(@Param('id') id: string) {
    return this.extensionsService.deactivate(id);
  }
}
