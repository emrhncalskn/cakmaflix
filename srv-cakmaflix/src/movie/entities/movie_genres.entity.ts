import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "./genre.entity";
import { Movie } from "./movie.entity";

@Entity('movie_genres')
export class MovieGenres {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    movie_id: number;
    @Column()
    genre_id: number;

    @ManyToOne(() => Movie, movie => movie.movieGenres)
    @JoinColumn({ name: 'movie_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_gm_movie_id' })
    movie: Movie;

    @ManyToOne(() => Genre, genre => genre.movieGenres)
    @JoinColumn({ name: 'genre_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_gm_genre_id' })
    genre: Genre;
}
