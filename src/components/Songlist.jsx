import '../styles/Songlist.css'
function Songlist(){

    return(
        <div className="anime-list bg-dark">
            <ul className="list-group"></ul>
            <li className="list-group-item d-flex justify-content-between align-items-center fs-4 text-white">Song-1 </li>
            <li className="list-group-item d-flex justify-content-between align-items-center fs-4 text-white">Song-2 </li>
            <li className="list-group-item d-flex justify-content-between align-items-center fs-4 text-white">Song-3 </li>
            <li className="list-group-item d-flex justify-content-between align-items-center fs-4 text-white">Song-4 </li>
        </div>
    )
}

export default Songlist;