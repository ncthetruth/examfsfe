import React, { useState } from 'react';

const getNextFiveDays = (): Date[] => {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }
  return days;
};

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

interface DayButtonsProps {
  onDateChange: (date: Date) => void;
}

const DayButtons: React.FC<DayButtonsProps> = ({ onDateChange }) => {
  const days = getNextFiveDays();
  const [selectedDay, setSelectedDay] = useState<Date>(days[0]);

  const handleButtonClick = (day: Date) => {
    setSelectedDay(day);
    onDateChange(day);
  };

  return (
    <div className="flex space-x-2 mt-4 justify-center">
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(day)}
          className={`px-4 py-2 rounded border ${
            selectedDay.toDateString() === day.toDateString()
              ? 'bg-red-500 text-white'
              : 'bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
          }`}
        >
          {formatDate(day)}
        </button>
      ))}
    </div>
  );
};

export default DayButtons;
