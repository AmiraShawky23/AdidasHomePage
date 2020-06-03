import React from 'react'

const CategoryCard = ({headingText, HeadingLink, HeadingLinkText}) => {

  return (
    <div className="col s12 m3">
        <div className="shopping_category_card">
            <div className="content center">
                <h6>{headingText}</h6>
                <a href={HeadingLink}>{HeadingLinkText}</a>
            </div>
            <div className="gradian_overlay"></div>
            <div className="black_shadow"></div>
        </div>
    </div>
  )
}

export default CategoryCard;