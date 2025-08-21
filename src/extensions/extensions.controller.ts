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
import { PaginationDto } from 'src/common/dto/pagination.dto';
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
    type: [PaginationDto],
  })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.extensionsService.findAll(paginationDto);
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

  @Throttle({ default: { limit: 50, ttl: 60 * 1000 } })
  @Get('active/:active')
  @ApiResponse({
    status: 200,
    description: 'Extensions fetched by active status',
    type: [PaginationDto],
  })
  findAllByActive(
    @Param('active') active: boolean,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.extensionsService.findAllByActive(active, paginationDto);
  }
}
