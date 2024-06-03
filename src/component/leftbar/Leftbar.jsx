import './leftbar.scss'
import madara from '../pics/madara.jpg'
import friend from '../icons/friends.png'
import group from '../icons/group.jpeg'
import market from '../icons/marke.png'
import watch from '../icons/wach.png'
import memories from '../icons/memories.png'
import events from '../icons/even.png'
import tutorials from '../icons/urorials.png'
import gaming from '../icons/gaming.png'
import gallery from '../icons/galler.png'
import videos from '../icons/videos.png'
import messages from '../icons/messages.jpeg'
import fundraiser from '../icons/fundraiser.png'
import courses from '../icons/courses.png'

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
               <img src={friend} alt="" />
               <span>Friends</span>
          </div>
          <div className="item">
             <img src={group} alt="" />
             <span>Groups</span>
          </div>
           <div className="item">
             <img src={market} alt="" />
             <span>Marketplace</span>
          </div>
         <div className="item">
            <img src={watch} alt="" />
           <span>Watch</span>
        </div>
        <div className="item">
          <img src={memories} alt="" />
          <span>Memories</span>
         </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          
          <div className="item">
              <img src={events} alt="" />
             <span>Events</span>
          </div>
          <div className="item">
             <img src={gaming} alt="" />
             <span>Gaming</span>
          </div>
          <div className="item">
              <img src={gallery}alt="" />
              <span>Gallery</span>
          </div>
          <div className="item">
             <img src={videos} alt="" />
              <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="" />
             <span>Messages</span>
            </div>
        </div>

        <hr />
        <div className="menu">
            <span>Others</span>
   
          <div className="item">
               <img src={fundraiser} alt="" />
               <span>Fundraiser</span>
          </div>
          <div className="item">
               <img src={tutorials} alt="" />
               <span>Tutorials</span>
          </div>
          <div className="item">
              <img src={courses} alt="" />
             <span>Courses</span>
           </div>
           </div> 
    </div> 
   </div>
  )
}

export default Leftbar