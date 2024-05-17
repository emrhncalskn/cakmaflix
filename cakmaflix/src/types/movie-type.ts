export interface Movie {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    hero_image: string;
    rating: number;
    ratingBase: number;
    reviewsCount: number;
    duration: number;
    genres: string;
    code: string;
    released_at: Date;
    created_at: Date;
}
