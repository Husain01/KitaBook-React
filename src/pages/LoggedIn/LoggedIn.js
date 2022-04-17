import React from 'react'
import './LoggedIn.css'

const LoggedIn = () => {
  return (
    <div className='content-container'
    // className={`"content-container" ${WishlistCSS["content-container"]}`}
    >
      <main className='main-content'
    //   className={`main-content ${WishlistCSS["main-content"]}`}
      >
        <h2 className='loggedIn-heading '
        // className={`wishlist-heading ${WishlistCSS["wishlist-heading"]}`}
        >
          You are already Logged in
        </h2>
        </main>
        </div>
  )
}

export default LoggedIn