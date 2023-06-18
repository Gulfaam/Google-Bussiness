import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepo: Repository<Review>,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    try {
      if (createReviewDto.rating <= 0 || createReviewDto.rating > 5) {
        throw new HttpException('Rating should be 1 to 5', 400);
      }
      const newReview = this.reviewRepo.create({
        ...createReviewDto,
        created_at: new Date(),
      });
      return await this.reviewRepo.save(newReview);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
