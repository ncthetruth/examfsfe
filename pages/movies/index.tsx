import { Title } from '../../components/Title';
import Navbar from '@/components/NavBar';
import MovieList from '@/components/MovieList';
import Footer from '@/components/Footer';

const IndexPage = () => {
    return (
        <div>
            <Navbar />
                <div className='flex items-center justify-center'>
                <Title>Movies</Title>
                <MovieList />
            </div>
        <Footer />
        </div>
    );
}

export default IndexPage;
