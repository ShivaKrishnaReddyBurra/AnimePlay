import Navbar from './components/Navbar';
import Play from './components/Play';
import Footer from './components/Footer';
import songs from './SongList';
import { useState, useEffect } from 'react';
function App() {
    const [index, setIndex] = useState(0);
    const next = () => {
        if (index === songs.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    const previous = () => {
        if (index === 0) {
            setIndex(songs.length - 1);
        } else {
            setIndex(index - 1);
        }
    }
 

    return (
        <div>
            <Navbar />
            <Play img={songs[index].img} song={songs[index].song} text={songs[index].text} />
            <button onClick={next} className='next-arrow position-fixed top-50 end-0 p-3 bg-transparent '><i className='bi bi-arrow-right'></i></button>
            <button onClick={previous} className='prev-arrow position-fixed top-50  p-3 bg-transparent '><i className='bi bi-arrow-left'></i></button>
            <Footer />
        </div>
    )
}

export default App;