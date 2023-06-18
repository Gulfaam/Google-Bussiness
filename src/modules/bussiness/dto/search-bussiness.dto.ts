import { IsOptional } from 'class-validator';

export class SearchBussinessDto {
  @IsOptional()
  id: number;

  @IsOptional()
  name: string;
}
