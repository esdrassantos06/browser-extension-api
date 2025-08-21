import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchExtensionDto {
  @ApiProperty({ description: 'Search query' })
  @IsString()
  @IsNotEmpty()
  query: string;
}
