import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard'
import CategoryPapper from '../../assets/images/category_papper.png'

const CategoryCardTaps = () => {

  return (
    <div className="shopping_category">
        <div className="container">
          <h2 className="heading_h2">
              <span className="bg">
                  browse by
              </span>
              <span className="no_bg">
                  category
              </span>
          </h2>
          <Tabs>
            <TabList className='tab_list'>
              <Tab className='tab_list_item'>Men</Tab>
              <Tab className='tab_list_item'>Women</Tab>
              <Tab className='tab_list_item'>Kids</Tab>
            </TabList>
        
            <TabPanel>
              <div className="row">
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row">
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row">
                  <CategoryCard headingText='Shoes' HeadingLink='github.com' HeadingLinkText='explore' />
              </div>
            </TabPanel>
          </Tabs>
        </div>
        
        <div className="category_papper">
            <img src={CategoryPapper} alt=""/>
          </div>
    </div>
  )
}

export default CategoryCardTaps;