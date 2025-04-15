import Navbar from '../components/Navbar.jsx';
import Home from '../components/Home.jsx';

import Cards from '../components/Cards.jsx';
import Carrousel from '../components/Carousel.jsx';
import Footer from '../components/Footer.jsx';
import Charts from '../components/Charts.jsx';

const LayoutWrapper = () => {

  return (
    <div className="layout-wrapper">
      
      <Navbar />
      <Carrousel/>
      <Home/>
      <Charts/>
      <Cards/>
      
      <Footer/>
    </div>
  );
};

export default LayoutWrapper;
