import { Transform } from 'class-transformer';
import { IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class FindAllExtensionsDto extends PaginationDto {
  @ApiProperty({
    description:
      'Filter by active status. If not provided, returns all extensions',
    required: false,
    example: true,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return undefined;
  })
  @IsBoolean()
  active?: boolean;
}
