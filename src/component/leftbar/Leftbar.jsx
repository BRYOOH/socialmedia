import './leftbar.scss'
import madara from '../pics/madara.jpg'
const Leftbar = () => {
  return (
   <div className="leftbar">
    <div className="container">

        <div className="menu">
          <div className="user">
             <img src={madara} alt="" />
              <span>Kakashi</span>
          </div> 
          <div className="item">
               <img src="" alt="" />
               <span>Friends</span>
          </div>
          <div className="item">
             <img src="" alt="" />
             <span>Groups</span>
          </div>
           <div className="item">
             <img src="" alt="" />
             <span>Marketplace</span>
          </div>
         <div className="item">
            <img src="" alt="" />
           <span>Watch</span>
        </div>
        <div className="item">
          <img src="" alt="" />
          <span>Memories</span>
         </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          
          <div className="item">
              <img src="" alt="" />
             <span>Events</span>
          </div>
          <div className="item">
             <img src="" alt="" />
             <span>Gaming</span>
          </div>
          <div className="item">
              <img src="" alt="" />
              <span>Gallery</span>
          </div>
          <div className="item">
             <img src="" alt="" />
              <span>Videos</span>
          </div>
          <div className="item">
            <img src="" alt="" />
             <span>Messages</span>
            </div>
        </div>

        <hr />
        <div className="menu">
            <span>Others</span>
   
          <div className="item">
               <img src="" alt="" />
               <span>Fundraiser</span>
          </div>
          <div className="item">
               <img src="" alt="" />
               <span>Tutorials</span>
          </div>
          <div className="item">
              <img src="" alt="" />
             <span>Courses</span>
           </div>
           </div> 
    </div> 
   </div>
  )
}

export default Leftbar