// ┌─────────────────────────────────────────┐
// │                                         │
// │   Serving!                              │
// │                                         │
// │   - Local:    http://localhost:3000     │
// │   - Network:  http://192.168.1.5:3000   │   



import React from 'react';
import './searchpage.css';
import { useStateValue } from './StateProvider';
import Googlesearch from './Googlesearch';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import SellIcon from '@mui/icons-material/Sell';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {

  const [{term =''}] = useStateValue();
  const {data} = Googlesearch(term)

  console.log(data);
  return (
    <div className='searchpage'>

      <div className='searchpage_header'>
        <Link to='/'>
        <img className='searchpage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' alt=''>
        </img>
        </Link>
        
        <div className='searchpage_headerbody'>
          <Search hideButtons />

        <div className='searchpage_option'>

          <div className='options_left'>

            <div className='searchpage_option'>
              <SearchIcon/>
              <Link to="/all">All</Link>
            </div>
            <div className='searchpage_option'>
              <FeedIcon/>
              <Link to="/news">News</Link>
            </div>
            <div className='searchpage_option'>
              <SlideshowIcon/>
              <Link to="/video">Videos</Link>
            </div>
            <div className='searchpage_option'>
              <ImageIcon/>
              <Link to="/image">Images</Link>
            </div>
            <div className='searchpage_option'>
              <SellIcon/>
              <Link to="/shopping">shopping</Link>
            </div>
            <div className='searchpage_option'>
              <LocationOnIcon/>
              <Link to="/map">Maps</Link>
            </div>
            <div className='searchpage_option'>
              <MoreVertIcon/>
              <Link to="/shopping">More</Link>
            </div>

          </div>

          <div className='options_right'>
            <Link to="tool">Tools</Link>
          </div>
          </div>
        </div>
      </div>


      {term &&(
        <div className='searchpage_result'>

          {data?.items.map(item => (
            <div 
            className='searchpage_results'>
              <a className='searchpage_resultlink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (

                  <img className='searchpage_resultimg' src={item.pagemap?.cse_image[0]?.src}
                   alt=''
                   />
    
                )}

                {item.displayLink}
              </a>

              <a className='searchpage_result_title' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchpage_result_short'>{item.snippet  }</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default SearchPage;
