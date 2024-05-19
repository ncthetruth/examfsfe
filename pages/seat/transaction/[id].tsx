import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/NavBar';
import LoadingSpinner from '@/components/LoadingSpinner';

const Transaction: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { movieId, cinemaName, showtime, date, selectedSeats } = router.query;
  const [loading, setLoading] = useState<boolean>(true);
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = {
            id: id.toString(),
            movieId: movieId.toString(),
            cinemaName: cinemaName.toString(),
            showtime: showtime.toString(),
            date: new Date(date.toString()).toLocaleDateString(),
            selectedSeats: selectedSeats.toString().split(','), 
          };
          setTransactionData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching transaction data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!transactionData) {
    return <div>Data transaksi tidak ditemukan.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <p><strong>Transaction ID:</strong> {transactionData.id}</p>
          <p><strong>Movie ID:</strong> {transactionData.movieId}</p>
          <p><strong>Cinema:</strong> {transactionData.cinemaName}</p>
          <p><strong>Showtime:</strong> {transactionData.showtime}</p>
          <p><strong>Date:</strong> {transactionData.date}</p>
          <p><strong>Selected Seats:</strong> {transactionData.selectedSeats.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
