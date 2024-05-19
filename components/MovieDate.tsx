import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DayButtons from '@/components/DayButtons';

interface Showtime {
  time: string;
}

interface Cinema {
  name: string;
  showtimes: Showtime[];
}

interface City {
  name: string;
  cinemas: Cinema[];
}

const cities: City[] = [
  {
    name: 'Jakarta',
    cinemas: [
      {
        name: 'Grand Indonesia',
        showtimes: [
          { time: '10:00' },
          { time: '12:00' },
          { time: '14:00' },
        ],
      },
      {
        name: 'Pacific Place',
        showtimes: [
          { time: '11:00' },
          { time: '13:00' },
          { time: '15:00' },
        ],
      },
      {
        name: 'Central Park',
        showtimes: [
          { time: '11:00' },
          { time: '13:00' },
          { time: '15:00' },
        ],
      },
    ],
  },
  {
    name: 'Bandung',
    cinemas: [
      {
        name: 'Miko Mall',
        showtimes: [
          { time: '09:00' },
          { time: '11:00' },
          { time: '13:00' },
        ],
      },
      {
        name: 'Paris Van Java',
        showtimes: [
          { time: '10:30' },
          { time: '12:30' },
          { time: '14:30' },
        ],
      },
    ],
  },
];

interface MovieDateProps {
  movieId: number;
}

const MovieDate: React.FC<MovieDateProps> = ({ movieId }) => {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<string>(cities[0].name);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const selectedCityData = cities.find(city => city.name === selectedCity);

  const handleShowtimeClick = (cinemaName: string, showtime: string) => {
    const encodedMovieId = encodeURIComponent(movieId.toString());
    const encodedCinemaName = encodeURIComponent(cinemaName);
    const encodedShowtime = encodeURIComponent(showtime);
    const encodedDate = encodeURIComponent(selectedDate.toISOString().split('T')[0]);
    router.push(`/seat/${encodedMovieId}-${encodedCinemaName}-${encodedShowtime}-${encodedDate}`);
  };

  return (
    <div className="p-4 ml-40 mr-40 mx-auto">
      <div className="mb-4">
        <div className='max-w-[15%]'>
          <label htmlFor="city" className="block text-lg font-medium text-gray-700">
            Select City:
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          >
            {cities.map(city => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <DayButtons onDateChange={handleDateChange} />

      {selectedCityData && selectedCityData.cinemas.map((cinema, cinemaIndex) => (
        <div key={cinemaIndex} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{cinema.name}</h2>
          <div className="flex space-x-2">
            {cinema.showtimes.map((showtime, showtimeIndex) => (
              <button
                key={showtimeIndex}
                onClick={() => handleShowtimeClick(cinema.name, showtime.time)}
                className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
              >
                {showtime.time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieDate;
