import songs from "../List";
function SongCards(props) {
  return (


    <div className="song-cards mt-4">
        <div className="row">
            <div className="col-2">
            <img src={props.img} className="card-img h-100 w-100" alt="..." />
            </div>
            <div className="col-10"  >
                <h5 className="title text-white">{props.title}</h5>
                <p className="text-white ">{props.text}</p>
                <a href="#" className="btn btn-primary">Play</a>
            </div>
        </div>
    </div>
  );
}

export default SongCards;