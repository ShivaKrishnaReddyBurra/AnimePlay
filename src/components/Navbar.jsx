import '../styles/Navbar.css';
import { useState } from 'react';
import bg from '../images/bg.jpeg'
function Navbar(){

    const [hover, setHover] = useState(false);
    const hoverOn = () => {
        setHover(true);
    }
    const hoverOff = () => {
        setHover(false);
    }
    const Display = () => {
        return(
            <div className='text-center' >
                <div className='row justify-content-md-center'>
                <div className='col-4'>
                        <img src={bg} alt="image" style={{height:"150px", width:"75%"}} />                    
                    </div>
                    <div className='col-6'>
                        <p className='fs-4 text-white'><span className='text-info'>Welcome to Anime Play!</span> Discover a world of anime theme songs and popular music tracks. Enjoy seamless streaming, curated playlists, and a user-friendly interface. Join our community of music lovers and let Anime Play be your go-to for all things music. Start your musical journey with us today!</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="d-flex justify-content-center bg-dark bg-gradient shadow-sm anime-nav" onMouseOver={hoverOn} onMouseLeave={hoverOff} >
            <h1 className="text-danger fixed-top text-center">Anime Play</h1>  
            <div className=' anime-about'>{hover && <Display />}</div>
        </div>
      
    )
}
export default Navbar;