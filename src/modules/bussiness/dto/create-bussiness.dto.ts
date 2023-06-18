import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBussinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;
}
