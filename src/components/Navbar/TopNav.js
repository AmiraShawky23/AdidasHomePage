import React from 'react'
import ReebokImg from '../../assets/images/icon-crosslink-logo-reebok.svg'

const TopNav = ({isSponser, topNavList}) => {

  const List = topNavList.length ? (
    topNavList.map(topNavListItem => {
      return (
        <li key={topNavListItem.id}>
            <a href="https://github.com">{topNavListItem.text}</a>
        </li>
      )
    })
  ) : (
    null
  );

  return (
    <div className="top_menu">
        <ul>
            {
              isSponser && 
              <li className="reebok">
                <a href="github.com">
                    <span>also visit</span>
                    <div className="rebook_img">
                        <img src={ReebokImg} alt='' />
                    </div>
                </a>
            </li>
            }
            {
              List
            }
        </ul>
    </div>
  )
}

export default TopNav;