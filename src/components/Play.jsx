import '../styles/Play.css'
import Songlist from './Songlist';
import { useState, useEffect } from 'react';
function Play(props) {
    const play = () => {
        document.querySelector('audio').play();
    }
    const pause = () => {
        document.querySelector('audio').pause();
    }

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = document.querySelector('audio');
        audioElement.addEventListener('play', () => {
            setIsPlaying(true);
        });
        audioElement.addEventListener('pause', () => {
            setIsPlaying(false);
        });
    }, []);

    return (
        <div className=" container anime-play border border-dark min-vw-100" >
            <div className='row '>
                <div className='col-4'>
                    <Songlist />
                </div>
                <div className='col-8'>
                    <div className="row anime-play-top w-100 h-100">
                        <div className="col border border-dark">
                            <img src={props.img} className='play-image w-100 h-100' />
                        </div>
                        <div className="col border border-dark">
                            <h1 className='text-primary play-descp fs-3'>{props.text}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center row align-items-end p-1'>
                <audio src={props.song}></audio>
                {isPlaying ? (
                    <button onClick={pause} className='w-25'><i className='bi bi-pause'></i></button>
                ) : (
                    <button onClick={play} className='w-25'><i className='bi bi-play'></i></button>
                )}
            </div>
        </div>
    )
}

export default Play