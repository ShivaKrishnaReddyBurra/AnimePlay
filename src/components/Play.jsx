import naruto from '../images/naruto.jpeg';
import '../styles/Play.css'
import itachi from '../music/senya.mp3'
function Play(){

    return(
        <div className="anime-play border border-dark" >
            <div className="row anime-play-top p-3">
                <div className="col border border-dark">
                    <img src={naruto} className='play-image' />
                </div>
                <div className="col border border-dark">
                    <h1 className='text-primary play-descp'>Itachi Theme</h1>
                </div>
            </div>
            <div className='row align-items-end p-1'>
                <audio src={itachi} controls></audio>
            </div>
        </div>
    )
}

export default Play