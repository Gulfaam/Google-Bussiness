import { HttpException, Injectable } from '@nestjs/common';
import { CreateBussinessDto } from './dto/create-bussiness.dto';
import { SearchBussinessDto } from './dto/search-bussiness.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bussiness } from './entities/bussiness.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BussinessService {
  constructor(
    @InjectRepository(Bussiness) private bussinessRepo: Repository<Bussiness>,
  ) {}

  async create(createBussinessDto: CreateBussinessDto) {
    try {
      const newBussiness = this.bussinessRepo.create({
        ...createBussinessDto,
        created_at: new Date(),
      });
      return await this.bussinessRepo.save(newBussiness);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  async findOne(query: Partial<SearchBussinessDto>) {
    try {
      let reviews;
      const bussinessQuery = this.bussinessRepo.createQueryBuilder('bussiness');

      if (query.id) {
        bussinessQuery.where('bussiness.id = :id', { id: query.id });
      } else {
        bussinessQuery.where('bussiness.name = :name', { name: query.name });
      }

      reviews = await bussinessQuery
        .leftJoinAndSelect('bussiness.reviews', 'reviews')
        .orderBy('reviews.created_at', 'DESC')
        .getOne();

      if (reviews) {
        const bussinessReviews = reviews.reviews.map((review) => review.rating);

        const sum = bussinessReviews.reduce(
          (total, rating) => total + rating,
          0,
        );
        const average = sum / bussinessReviews.length;

        const aggregatedScore = average.toFixed(2);

        return { Aggregated_Score: aggregatedScore, Bussiness: reviews };
      }
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
