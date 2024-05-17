import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieGenres } from "./movie_genres.entity";

@Entity('genre')
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(() => MovieGenres, movieGenres => movieGenres.genre)
    movieGenres: MovieGenres[];

}