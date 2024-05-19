import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/NavBar';
import MovieDetail from '@/components/MovieDetail';
import MovieDate from '@/components/MovieDate';
import moviesData, { Movie } from '@/functions/moviesData';
import LoadingSpinner from '@/components/LoadingSpinner';

const ScheduleDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [scheduleData, setScheduleData] = useState<{ id: string | string[] | undefined, movies: Movie[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = {
          id,
          movies: moviesData.filter((movie: Movie) => movie.id === parseInt(id as string))
        };
        setScheduleData(data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />
  }

  if (!scheduleData || scheduleData.movies.length === 0) {
    return <div>No schedule data found.</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Schedule Details</h1>
      <p>ID: {scheduleData.id}</p>
      {scheduleData.movies.map((movie: Movie, index: number) => (
        <MovieDetail key={index} movie={movie} />
      ))}
      {scheduleData.movies.map((movie: Movie, index: number) => (
        <MovieDate key={index} movieId={movie.id} />
      ))}
    </div>
  );
};

export default ScheduleDetails;
