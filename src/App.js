import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import NewStyle from './components/New/NewStyle';
import NewArrival from './components/New/NewArrival';
import News from './components/News/News';
import Video from './components/Video/Video';
import Header from './components/Header/Header';
import ShoppingType from './components/ShoppingType/ShopingType';
import ProductCardSlider from './components/ProductCard/ProductCardSlider';
import CategoryCardTaps from './components/CategoryCard/CategoryCardTaps';
import MallCardSlider from './components/MallCard/MallCardSlider';
import Nav from './components/Navbar/Nav';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Nav />
        <Header />
        <CategoryCardTaps />
        <ShoppingType />
        <ProductCardSlider isCenter={true} bg='trending' noBg='this week' />
        <MallCardSlider />
        <ProductCardSlider isCenter={false} bg='best' noBg='selling' />
        <NewStyle />
        <Video />
        <News />
        <NewArrival />
        <Footer />
      </div>
    );
  }
}

export default App;
