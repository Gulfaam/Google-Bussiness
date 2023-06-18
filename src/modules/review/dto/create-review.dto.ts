import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  review_text: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  bussiness_id: number;
}
