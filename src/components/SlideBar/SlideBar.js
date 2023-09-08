import React from 'react'
import './SlideBar.css'


const SlideBar = (props) => {
  const {tabDetails, setActiveId, isActive} = props
  const {tabId,displayText}= tabDetails

  const onClickTab = () => {
    setActiveId(tabId)
  }
  
  const tabButton = isActive ? `slide active`: `slide`
  return (
    <div>
      <li className='slide-list'>
         <button
           type='button'
           onClick={onClickTab}
           className={tabButton}
          >
            {displayText}
          </button>
      </li>
    </div>
  )
}

export default SlideBar