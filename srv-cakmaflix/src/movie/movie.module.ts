import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Review } from './entities/review.entity';
import { MovieGenres } from './entities/movie_genres.entity';
import { Genre } from './entities/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Genre, Review, MovieGenres])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule { }
