import Navbar from './components/Navbar';
import Play from './components/Play';
import Footer from './components/Footer';
import songs from './SongList';
import { useState } from 'react';
function App() {
    let [song, nextsong] = useState(0);
    const next = () => {
        if (songs.length - 1 === song) {
            nextsong(0)
        }
        else
            nextsong(song + 1)
    }
    return (
        <div>
            <Navbar />
            <Play img={songs[song].img} song={songs[song].song} />
            <button onClick={next} className='next-arrow position-fixed top-50 end-0 p-3 bg-transparent '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></button>
            <Footer />
        </div>
    )
}

export default App;