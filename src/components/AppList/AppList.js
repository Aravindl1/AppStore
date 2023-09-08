import React from 'react'
import './AppList.css'

const AppList = (props) => {
   const {appDetails}= props
   const {appName,imageUrl} = appDetails

  return (
    <li className='list'>
      <img 
       src={imageUrl}
       alt={appName}
       className='list-image'
      />
      <p className='list-name'>{appName}</p>
    </li>
  )
}

export default AppList