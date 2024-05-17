import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";

@Entity('review')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'text' })
    title: string;
    @Column()
    author: string;
    @Column({ nullable: true, type: 'float' })
    score: number;
    @Column({ type: 'text' })
    content: string;
    @Column()
    movie_id: number;
    @Column()
    code: string;
    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Movie, movie => movie.reviews)
    @JoinColumn({ name: 'movie_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_movie_id' })
    movie: Movie;
}