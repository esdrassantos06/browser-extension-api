import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateExtensionDto {
  @ApiProperty({ description: 'Name of the extension' })
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the extension',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  @MinLength(3)
  description?: string | null;

  @ApiPropertyOptional({ description: 'Is the extension active?' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
