import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/NavBar';
import SeatPicker from '@/components/SeatPicker';
import LoadingSpinner from '@/components/LoadingSpinner';
import MovieDetail from '@/components/MovieDetail';
import moviesData, { Movie } from '@/functions/moviesData';

const SeatSelection: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>(true);
  const [cinemaName, setCinemaName] = useState<string | null>(null);
  const [showtime, setShowtime] = useState<string | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      const [movieIdStr, cinema, time, dateString] = (id as string).split('-');
      const movieId = parseInt(decodeURIComponent(movieIdStr));
      setCinemaName(decodeURIComponent(cinema));
      setShowtime(decodeURIComponent(time));
      setDate(new Date(decodeURIComponent(dateString)));
    
      const selectedMovie = moviesData.find(m => m.id === movieId);
      setMovie(selectedMovie || null);
      setLoading(false);
    }
  }, [id]);

  const handleSeatSelection = (seats: string[]) => {
    setSelectedSeats(seats);
  };
  const handleProceedToTransaction = () => {
    if (!movie || !date || !cinemaName || !showtime || selectedSeats.length === 0) {
      return;
    }
  
    const transactionData = {
      movieId: movie.id,
      cinemaName,
      showtime,
      date: date.toISOString(),
      selectedSeats,
    };
  
    router.push({
      pathname: `/seat/transaction/${id}`,
      query: transactionData,
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!id || !cinemaName || !showtime || !movie || !date) { 
    return <div>Invalid URL parameters or movie not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center'>
        <div className='mt-14'>
          <MovieDetail movie={movie} />
          <div className="bg-gray-100 p-6 rounded-md shadow-md mt-8 text-center">
            <h1 className="text-xl mb-4">Seat Selection Details</h1>
            <p className="mb-2"><strong>Cinema:</strong> {cinemaName}</p>
            <p className="mb-2"><strong>Showtime:</strong> {showtime}</p>
            <p><strong>Date:</strong> {date.toDateString()}</p>
          </div>
          <h1 className="text-center mt-8">Choose Your Seats</h1>
          <SeatPicker rows={10} cols={20} onSeatSelect={handleSeatSelection} />
          <button onClick={handleProceedToTransaction} className="bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 mt-4 rounded mx-auto block">Proceed to Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
