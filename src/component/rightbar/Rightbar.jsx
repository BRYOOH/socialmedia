import React from 'react'
import './rightbar.scss'
import sui from '../pics/ninja.jpg' 

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
       
        <div className="item">
        <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={sui} alt="" />
              <span>Si sui</span>
            </div>
            <div className="buttons">
              <button >Follow</button>
              <button >delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={sui} alt="" />
              <span>Si sui</span>
            </div>
            <div className="buttons">
                <button className='btn-f'>Follow</button>
              <button className='btn-d'>delete</button>
            </div>
            </div>

          </div>

     <div className="item">
     <span>Latest activities</span>
       <div className="user">
        <div className="userInfo">
           <img src={sui} alt="" />
           <p>
           <span>Si sui</span> was online
           </p>
        </div>
        <span>1 min ago</span>
       </div>
       
       <div className="user">
         <div className="userInfo">
            <img src={sui} alt="" />
            <p>
            <span>Si sui</span> was online
            </p>
         </div>
        <span>1 min ago</span>
        </div>
         </div>

         <div className="item">
            <span>Online friends</span>
             <div className="user">
           <div className="userInfo">
           <img src={sui} alt="" />
           <div className='profile'/>
           <span>Si sui</span> 
        </div>
        <span>Changed his profile pic </span>
       </div>

             <div className="user">
           <div className="userInfo">
           <img src={sui} alt="" />
           <div className='profile'/>
           <span>Si sui</span> 
        </div>
        <span>Posted a pic </span>
       </div>
      
             <div className="user">
           <div className="userInfo">
         
           <img src={sui} alt="" />
           <div className='profile'/>
           <span>Si sui</span> 
        </div>
        <span>Commented on your video </span>
       </div>
    
          <div className="user">
          <div className="userInfo">
         
           <img src={sui} alt="" />
           <div className='profile'/>
           <span>Si sui</span> 
        </div>
        <span>Liked a post </span>
       </div>
       
      </div>
      </div>
      </div>
     
  )
}

export default Rightbar