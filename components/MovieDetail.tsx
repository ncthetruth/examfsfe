import React from 'react';

interface Movie {
  title: string;
  description: string;
  posterUrl: string;
  rating: string;
  genre:string;
  duration:number;
}

const MovieDetail: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="flex p-4 border border-gray-300 rounded shadow-md mt-10 justify-center ml-40 mr-40">
      <div className="flex-shrink-0 w-64 h-96 mr-4">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover rounded"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <h2 className="text-5xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-600 mb-2">{movie.description}</p>
        <div className="flex items-center">
          <span className="text-gray-700 mr-2 text-xl font-bo">Rating: {movie.rating}</span>
        </div>
        <span className="text-gray-700 mr-2 text-xl font-bo">Genre: {movie.genre}</span>
        <div>
        <span className="text-gray-700 mr-2 text-xl font-bo">Duration: {movie.duration} Minutes</span>
        </div>
        
      </div>
      
    </div>
  );
};

export default MovieDetail;
