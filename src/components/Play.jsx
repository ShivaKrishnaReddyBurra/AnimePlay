import naruto from '../images/naruto.jpeg';
import '../styles/Play.css'
import itachi from '../music/senya.mp3'
function Play(){

    return(
        <div className="container anime-play">
            <div className="row">
                <div className="col">
                    <img src={naruto} className='play-image'   />
                </div>
                <div className="col">
                    <h1 className='text-primary play-descp'>Itachi Theme</h1>
                </div>
            </div>
            <div className='row'>
                <audio src={itachi} controls></audio>
            </div>
        </div>
    )
}

export default Play