import React from 'react'
import FooterCollectionItem from './FooterCollectionItem';

const FooterCollection = () => {

  const sports= [
    { id: 1, text: 'Soccer'},
    { id: 2, text: 'Running'},
    { id: 3, text: 'Basketball'},
    { id: 4, text: 'Football'},
    { id: 5, text: 'Outdoor'},
    { id: 6, text: 'Golf'},
    { id: 7, text: 'Baseball'},
    { id: 8, text: 'Tennis'},
    { id: 9, text: 'Skateboarding'},
    { id: 10, text: 'Training'}
  ];
  const products= [
    { id: 1, text: 'Shoes'},
    { id: 2, text: 'Clothing'},
    { id: 3, text: 'Accessories'},
    { id: 4, text: 'New Arrivals'},
    { id: 5, text: 'Best Sellers'},
    { id: 6, text: 'Release Dates'},
    { id: 7, text: 'Sale'}
  ];
  const companyInfo= [
    { id: 1, text: 'About Us'},
    { id: 2, text: 'Students'},
    { id: 3, text: 'adidas Stories'},
    { id: 4, text: 'adidas Apps'},
    { id: 5, text: 'Store Locator'},
    { id: 6, text: 'Sustainability'},
    { id: 7, text: 'Creators Club'},
    { id: 8, text: 'Affiliates'},
    { id: 9, text: 'Press'},
    { id: 10, text: 'Careers'},
    { id: 11, text: 'Gift Cards'}
  ];
  const support= [
    { id: 1, text: 'Help'},
    { id: 2, text: 'Returns & Exchanges'},
    { id: 3, text: 'Shipping'},
    { id: 4, text: 'Order Tracker'},
    { id: 5, text: 'Store Locator'},
    { id: 6, text: 'Size Charts'},
    { id: 7, text: 'Gift Card Balance'},
    { id: 8, text: 'How to Clean'},
    { id: 9, text: 'Bra Fit Guide'},
    { id: 10, text: 'Promotions'}
  ];
  const collection= [
    { id: 1, text: 'NMD'},
    { id: 2, text: 'Superstar'},
    { id: 3, text: 'Ultraboost'},
    { id: 4, text: 'Believe This Tight'},
    { id: 5, text: 'adicolor'},
    { id: 6, text: 'Predator'},
    { id: 7, text: 'Nite Jogger'},
    { id: 8, text: 'Stan Smith'},
    { id: 9, text: 'EQT'},
    { id: 10, text: 'Gazelle'}
  ];
  return (
    <section className="footer_collection">
        <div className="container">
            <div className="row">
                <FooterCollectionItem collectionName='products' collectionList={products} />
                <FooterCollectionItem collectionName='sports' collectionList={sports} />
                <FooterCollectionItem collectionName='collection' collectionList={collection} />
                <FooterCollectionItem collectionName='support' collectionList={support} />
                <FooterCollectionItem collectionName='company info' collectionList={companyInfo} />
            </div>
        </div>
    </section>
  )
}

export default FooterCollection