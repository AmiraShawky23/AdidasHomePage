import React from 'react'

const FooterCollectionItem = ({collectionName,collectionList}) => {

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
    <div className="footer_collection_item">
        <ul>
            <li>
                <h5>{collectionName}</h5>
            </li>
            {
                collectionItem
            }
        </ul>
    </div>
  )
}

export default FooterCollectionItem