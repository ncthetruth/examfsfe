import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createUseStyles } from 'react-jss';

const promotions = [
  {
    id: 1,
    title: 'Promo 1',
    description: 'Diskon hingga 50% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961.jpg',
  },
  {
    id: 2,
    title: 'Promo 2',
    description: 'Gratis ongkir untuk pembelian di atas Rp100.000',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889.jpg',
  },
  {
    id: 3,
    title: 'Promo 3',
    description: 'Beli 1 gratis 1 untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 4,
    title: 'Promo 4',
    description: 'Diskon hingga 30% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 5,
    title: 'Promo 5',
    description: 'Beli 2 gratis 1 untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 6,
    title: 'Promo 6',
    description: 'Cashback hingga 20% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
];

const useStyles = createUseStyles({
  slideEnter: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  slideEnterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 500ms, transform 500ms',
  },
  slideExit: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  slideExitActive: {
    opacity: 0,
    transform: 'translateX(-100%)',
    transition: 'opacity 500ms, transform 500ms',
  },
});

const BannerPromotions = () => {
  const classes = useStyles();
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  const handlePrev = () => {
    setCurrentPromotionIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPromotionIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 overflow-hidden rounded-lg shadow-lg">
      <div className="relative flex items-center justify-center w-full h-64">
        <button
          className="absolute left-0 z-10 p-2 m-2 text-red-500 bg-black bg-opacity-20 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="relative w-full h-full overflow-hidden">
          <TransitionGroup className="h-full">
            <CSSTransition
              key={promotions[currentPromotionIndex].id}
              timeout={500}
              classNames={{
                enter: classes.slideEnter,
                enterActive: classes.slideEnterActive,
                exit: classes.slideExit,
                exitActive: classes.slideExitActive,
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={promotions[currentPromotionIndex].imageUrl}
                  alt={promotions[currentPromotionIndex].title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    {promotions[currentPromotionIndex].title}
                  </h3>
                  <p className="text-sm text-white">
                    {promotions[currentPromotionIndex].description}
                  </p>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button
          className="absolute right-0 z-10 p-2 m-2 text-red-500 bg-black bg-opacity-20 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannerPromotions;
