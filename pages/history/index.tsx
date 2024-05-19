import React from 'react';
import Navbar from '@/components/NavBar';
import movies from '@/functions/moviesData';

interface Transaction {
  id: string;
  ticketId: string;
  cinema: string;
  movieTitle: string;
  date: string;
  time: string;
  price: number;
  seats: string[];
}

const dummyTransactions: Transaction[] = [
  { 
    id: '1', 
    ticketId: 'TICKET001', 
    cinema: 'CGV Central Park', 
    movieTitle: 'Avengers: Endgame', 
    date: '2024-05-01', 
    time: '14:00', 
    price: 150000, 
    seats: ['A1', 'B2']
  },
  { 
    id: '2', 
    ticketId: 'TICKET002', 
    cinema: 'CGV Grand Indonesia', 
    movieTitle: 'Spider-Man: Far From Home', 
    date: '2024-05-02', 
    time: '15:30', 
    price: 200000, 
    seats: ['C3', 'D4']
  },
  { 
    id: '3', 
    ticketId: 'TICKET003', 
    cinema: 'CGV Plaza Senayan', 
    movieTitle: 'The Lion King', 
    date: '2024-05-03', 
    time: '12:00', 
    price: 100000, 
    seats: ['E5', 'F6']
  },
];

const TransactionHistory: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 mt-24">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
          {dummyTransactions.map((transaction) => {
            const movie: Movie | undefined = movies.find((m) => m.title === transaction.movieTitle);
            return (
              <div key={transaction.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 flex">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{transaction.movieTitle}</h2>
                  <p className="text-sm text-gray-500 mb-2">{transaction.cinema}</p>
                  <p className="text-sm text-gray-500 mb-2">Date: {transaction.date}</p>
                  <p className="text-sm text-gray-500 mb-2">Time: {transaction.time}</p>
                  <p className="text-sm text-gray-500 mb-2">Ticket ID: {transaction.ticketId}</p>
                  <p className="text-sm text-gray-500 mb-2">Seats: {transaction.seats.join(', ')}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold">Rp. {transaction.price}</p>
                  </div>
                </div>

                {movie && (
                  <div className="flex justify-center items-center">
                    <img src={movie.posterUrl} alt={movie.title} className="w-32 h-32 object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
