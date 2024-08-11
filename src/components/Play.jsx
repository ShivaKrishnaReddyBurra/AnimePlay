import naruto from '../images/naruto.jpeg';
import '../styles/Play.css'
import itachi from '../music/senya.mp3'
import Songlist from './Songlist';
function Play() {

    return (
        <div className=" container anime-play border border-dark min-vw-100 p-1" >
            <div className='row '>
                <div className='col-4'>
                    <Songlist />
                </div>
                <div className='col-8'>
                    <div className="row anime-play-top  w-100 h-100">
                        <div className="col border border-dark">
                            <img src={naruto} className='play-image w-100 h-100' />
                        </div>
                        <div className="col border border-dark">
                            <h1 className='text-primary play-descp'>Itachi Theme</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row align-items-end p-1'>
                <audio src={itachi} controls></audio>
            </div>
        </div>
    )
}

export default Play