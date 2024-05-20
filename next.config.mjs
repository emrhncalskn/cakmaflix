/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ia.media-imdb.com', 'images-na.ssl-images-amazon.com', 'm.media-amazon.com']
    },
    reactStrictMode: false // emr-NOTE: useEffect'in iki defa çalışmasını engellemek için
};

export default nextConfig;
