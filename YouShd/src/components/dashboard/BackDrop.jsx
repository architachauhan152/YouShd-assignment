import React from 'react'

export const BackDrop = ({sidebarclass,closeSidebar}) => {
  return (
    <div className={sidebarclass?'backdrop backdrop--open':'backdrop'} onClick={closeSidebar}>
        
    </div>
  )
}
