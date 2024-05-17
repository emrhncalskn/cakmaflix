import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieGenres } from './entities/movie_genres.entity';
import { Genre } from './entities/genre.entity';

@Injectable()
export class MovieService {

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) { }

  async getMovies() {
    return await this.movieRepository.find({ relations: { movieGenres: { genre: true } } });
  }

  async getMovieByCode(code: string) {
    return await this.movieRepository.findOne({ where: { code } });
  }

  async getMoviesByGenre() {
    return await this.genreRepository.find({ relations: { movieGenres: { movie: true } } });
  }


}
