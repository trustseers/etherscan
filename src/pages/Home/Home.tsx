import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contents from './Contents';

const Home = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Contents />
            <Footer />
        </div>
    );
}
export default Home;