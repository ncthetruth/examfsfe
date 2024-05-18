import { Title } from '../../components/Title';
import Navbar from '@/components/NavBar';
import VerticalBanner from '@/components/VerticalBanner';
import Footer from '@/components/Footer';

const IndexPage = () => {
    return (
        <div>
            <Navbar />
                <div className='flex items-center justify-center'>
                <Title>Promotion</Title>
                <VerticalBanner />
            </div>
            <Footer />
        </div>
    );
}

export default IndexPage;
