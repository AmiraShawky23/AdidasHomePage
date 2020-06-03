import React from 'react'

const DropdownCollectionItem = ({collectionName,collectionList, isSale=false}) => {

  const collectionItem = collectionList.length ? (
      collectionList.map(collectionListItem => {
        return (
          <li key={collectionListItem.id}>
              <a href="https://github.com">{collectionListItem.text}</a>
          </li>
        )
      })
    ) : (
      null
    );

return (
  
  <div className="drop_down_collection_item">
  {
    !isSale && 
      <ul>
        <li>
            <h5>{collectionName}</h5>
        </li>
        {
            collectionItem
        }
      </ul>
  }
  {
    isSale && 
      <div className='left_border_container'>
        <ul className='left_border'>
        <li>
            <h5>{collectionName}</h5>
        </li>
        {
            collectionItem
        }
      </ul>
      
      <div className='two_img'>
        <div className='img_1'>
        </div>
        <div className='img_2'>
        </div>
      </div>
      </div>
  }
</div>
)
}

export default DropdownCollectionItem;