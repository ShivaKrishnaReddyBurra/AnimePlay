import Navbar from './components/Navbar';
import Play from './components/Play';
import Footer from './components/Footer';
import songs from './SongList';
import { useState } from 'react';

function App()
{ 
    let [song,nextsong]=useState(0);
    const next=()=>{
        if(songs.length-1 == song)
        {
            nextsong(0)
        }
        else
            nextsong(song+1)
    }
    return (
        <div>
            <Navbar />
            <Play img={songs[song].img} song={songs[song].song}/>
            <button onClick={next}>Next</button>
            <Footer />
        </div>
    )
}

export default App;