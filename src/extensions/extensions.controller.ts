import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExtensionsService } from './extensions.service';
import { Prisma } from 'generated/prisma';

@Controller('extensions')
export class ExtensionsController {
  constructor(private readonly extensionsService: ExtensionsService) {}

  @Post()
  create(@Body() createExtensionDto: Prisma.ExtensionCreateInput) {
    return this.extensionsService.create(createExtensionDto);
  }

  @Get()
  findAll() {
    return this.extensionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extensionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExtensionDto: Prisma.ExtensionUpdateInput,
  ) {
    return this.extensionsService.update(id, updateExtensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extensionsService.remove(id);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: string) {
    return this.extensionsService.activate(id);
  }

  @Patch(':id/deactivate')
  deactivate(@Param('id') id: string) {
    return this.extensionsService.deactivate(id);
  }
}
