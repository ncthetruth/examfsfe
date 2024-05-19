import { useState } from 'react';

type SeatPickerProps = {
  rows: number;
  cols: number;
  onSeatSelect: (selectedSeats: string[]) => void;
};

const SeatPicker: React.FC<SeatPickerProps> = ({ rows, cols, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  const toggleSeatSelection = (seatId: string) => {
    setSelectedSeats((prev) => {
      const newSelectedSeats = new Set(prev);
      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
      } else {
        newSelectedSeats.add(seatId);
      }
      onSeatSelect(Array.from(newSelectedSeats));
      return newSelectedSeats;
    });
  };

  const generateSeatLabel = (row: number, col: number) => {
    const rowLabel = String.fromCharCode(65 + row);
    const colLabel = (col + 1).toString();
    return `${rowLabel}${colLabel}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const seatId = generateSeatLabel(row, col);
            const isSelected = selectedSeats.has(seatId);
            return (
              <div
                key={seatId}
                onClick={() => toggleSeatSelection(seatId)}
                className={`w-10 h-10 flex items-center justify-center cursor-pointer
                  ${isSelected ? 'bg-green-500' : 'bg-gray-300'}
                  hover:bg-gray-400`}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>
      <div className="mt-4">
        Selected Seats: {Array.from(selectedSeats).join(', ')}
      </div>
    </div>
  );
};

export default SeatPicker;
