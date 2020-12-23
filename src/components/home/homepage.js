import React, { useEffect } from 'react';
import Hello from '../summary/hello';
import Footer from '../footer/footer';
import Nav from '../menu/nav';
import MobMenu from '../../mobile/menu/menu';
import Social from '../socialmenu/socialmenu';
import Description from '../description/description';
import './homepage.css';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#faf6f0';
  }, []);
  return (
    <>
      <div className="container">
        <div className="row-1">
          <div className="column">
            <Nav />
          </div>
          <div className="column social">
            <Social />
          </div>
        </div>
        <div className="row-2">
          <MobMenu />
        </div>
        <div className="row-3">
          <div className="hello column">
            <Description />
          </div>
          <Hello className="column" />
        </div>
        <div className="row-4">
          <Social />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
