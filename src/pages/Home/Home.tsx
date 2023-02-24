import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contents from './Contents';
import './Home.css';

const Home = () => {
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <div className={`wrapper  ${darkToggle ? 'dark' : 'light'}`}>
      <div className="dark:bg-[#181818]">
        <Header dark={darkToggle} handleDark={setDarkToggle} />
        <Contents />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
