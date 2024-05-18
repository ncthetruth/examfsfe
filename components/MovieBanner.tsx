import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import movies from '@/functions/moviesData';

const splitTitle = (title: string) => {
  const words = title.split(' ');
  if (words.length > 3) {
    return [words.slice(0, 3).join(' '), words.slice(3).join(' ')];
  }
  return [title];
};

const MovieBanner: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, movies.length - 4));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startIndex = currentPage;
  const endIndex = startIndex + 4;
  const visibleMovies = movies.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-8 relative px-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleMovies.map((movie) => (
          <div key={movie.id} className="max-w-lg mx-auto mb-8 flex flex-col justify-between h-full">
            <div className="relative">
              <img src={movie.posterUrl} alt={movie.title} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="text-center mt-2 flex flex-col justify-between flex-grow">
              <div>
                {splitTitle(movie.title).map((line, index) => (
                  <h3 key={index} className="text-lg font-semibold">
                    {line}
                  </h3>
                ))}
              </div>
              <Link href={`/movies/schedule/${movie.id}`} legacyBehavior>
                <a className=" bg-white hover:bg-red-500 hover:text-white border border-red-500 text-red-500 font-bold py-2 px-4 rounded text-sm max-w-[200px] mx-auto">
                  BOOK NOW
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {currentPage > 0 && (
        <button
          onClick={prevPage}
          className="absolute left-0 top-[40%] transform -translate-y-1/2 px-2 py-1 rounded-lg bg-gray-300 hover:bg-gray-400 mx-10"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {endIndex < movies.length && (
        <button
          onClick={nextPage}
          className="absolute right-0 top-[40%] transform -translate-y-1/2 px-2 py-1 rounded-lg bg-gray-300 hover:bg-gray-400 mx-10"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

export default MovieBanner;
