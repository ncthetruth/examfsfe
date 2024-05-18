import { Title } from '../components/Title';
import { Page } from '../types/Page';
import Navbar from '@/components/NavBar';
import Promotions from '@/components/Promotion';
import MovieBanner from '@/components/MovieBanner';
import BannerPromotions from '@/components/BannerPromotions';
import Footer from '@/components/Footer';

const IndexPage: Page = () => {
    return (
        <div>
            <Navbar />
                <div className='flex items-center justify-center'>
                <Title>Home</Title>
                <div className="w-full mt-[5%] mb-20">
                <Promotions />
                <h1 className='text-red-500 text-4xl font-bold mt-6 ml-20'>NOW SHOWING</h1>
                <MovieBanner />
                <BannerPromotions />
            </div>
            
            </div>
            <Footer />
        </div>
    );
}

export default IndexPage;
