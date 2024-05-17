import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieGenres } from "./movie_genres.entity";
import { Review } from "./review.entity";

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column({ type: 'text' })
    thumbnail: string;
    @Column()
    rating: number;
    @Column()
    ratingBase: number;
    @Column()
    reviewsCount: number;
    @Column()
    duration: number;
    @Column({ type: 'text' })
    hero_image: string;
    @Column()
    code: string;
    @Column({ type: 'date' })
    released_at: Date;
    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MovieGenres, movieGenres => movieGenres.movie)
    movieGenres: MovieGenres[];
    @OneToMany(() => Review, review => review.movie)
    reviews: Review[];

}
