import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationAddOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import kakashi from '../pics/madara.jpg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
        <div  className="left">
          <Link to='/' style={{ textDecoration: "none" }}>
          <span>punksocial</span>
          </Link>
          <HomeOutlinedIcon/>
          <DarkModeOutlinedIcon/>
          <GridViewOutlinedIcon/>
          <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' />
          </div>
        </div>
        <div className="right">
          <PersonOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsActiveOutlinedIcon/>
          <div className="user">
            <img src={kakashi} alt="" />
            <span>Kakashi Hitake</span>
          </div>
        </div> 

    </div>
  )
}

export default Navbar