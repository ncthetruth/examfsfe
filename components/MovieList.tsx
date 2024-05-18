  import React, { useState } from 'react';
  import Link from 'next/link';
  import movies from '@/functions/moviesData';

  const genres: string[] = ['All', 'Action', 'Romance', 'Comedy', 'Horror'];

  const MovieList: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>('All');

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGenre(event.target.value);
    };

    const filteredMovies = selectedGenre === 'All'
      ? movies
      : movies.filter(movie => movie.genre === selectedGenre);

    return (
      <div className="container mx-auto p-4 mt-20">
        <div className="mb-4">
          <h1 className="text-red-500 text-4xl font-bold mb-4 ml-10">Now Playing</h1>
          <label htmlFor="genre-filter" className="block mb-2 text-sm font-medium text-gray-700 ml-10">Filter by Genre</label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-10"
            style={{ maxWidth: '200px' }}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="relative pb-[150%] overflow-hidden">
              <Link href={`/movies/schedule/${movie.id}`} legacyBehavior>
                <a>
                  <img src={movie.posterUrl} alt={movie.title} className="absolute inset-1 mx-auto w-[80%] h-[80%] object-cover rounded-xl transition-transform duration-300 transform hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 text-center px-10 pb-8">
                    <h2 className="text-xl font-semibold items-center justify-center">{movie.title}</h2>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default MovieList;
