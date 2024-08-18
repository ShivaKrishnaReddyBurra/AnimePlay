import '../styles/Songlist.css'
import SongCards from './SongCards';
import songs from '../List';
function Songlist(){

    function createSongCard(song){
        return(
            <SongCards img={song.img} title={song.title} text={song.smallDescription}/>
        )
    }

    return(
        <div className="anime-list bg-dark w-100 h-100">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center text-light">Song List</h1>
                </div>
                <div className="d-flex-rev">
                   {songs.map(createSongCard)}
                </div>
            </div>
        </div>
    )
}

export default Songlist;