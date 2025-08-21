import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SearchExtensionDto {
  @ApiProperty({ description: 'Search query' })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  query: string;
}
