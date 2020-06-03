import React from 'react'
import ShoppingTypeCard from './SoppingTypeCard'
import ShoppingCardBGImg1 from '../../assets/images/shopping_type_card_1.png'
import ShoppingCardBGImg2 from '../../assets/images/shopping_type_card_2.png'
import ShoppingCardBGImg3 from '../../assets/images/shopping_type_card_3.png'

const ShoppingType = () => {

  return (
    <div className="shopping_type">
         <div className="container">
            <h2 className="heading_h2">
                  <span className="bg">
                      who are you
                  </span>
                  <span className="no_bg">
                      shopping for ?
                  </span>
              </h2>
             <div className="row">
                 <ShoppingTypeCard title='women' text='all on for #mygirl' img={ShoppingCardBGImg1} />
                 <ShoppingTypeCard title='men' text='yes my #runway' img={ShoppingCardBGImg2} />
                 <ShoppingTypeCard title='kids' text='all on for #mygirl' img={ShoppingCardBGImg3} />
             </div>
         </div>
     </div>
  )
}

export default ShoppingType;