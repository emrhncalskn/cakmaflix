import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PassAuth } from 'src/auth/decorators/pass-auth.decorator';
import { MovieService } from './movie.service';

@PassAuth()
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }


  @Get()
  async getMovies(@Res() res: Response) {
    return res.status(200).json(await this.movieService.getMovies())
  }

  @Get('moviesbygenres')
  async getMoviesByGenres(@Res() res: Response) {
    return res.status(200).json(await this.movieService.getMoviesByGenre())
  }

}
