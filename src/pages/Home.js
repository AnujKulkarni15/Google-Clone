import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Home.css';
// import Search from './Search';
import Search from './Search';


function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='header_left'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>

        </div>
        <div className='header_right'>
        <Link to='/gmial'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon/>
        <AccountCircleIcon/>
        </div>
      </div> 

      <div className='home_body'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' alt=''/>

        <div className='home_inputcontainer'>
          <Search hideButtons/>
        </div>
      </div>
    </div>
  )
}

export default Home
