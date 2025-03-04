import globe from "/travel-journal-react/public/images/globe.png"

export default function header(){
    return (
        <div className="header"> 
            <img className="globe-img" src={globe} alt="globe" />
            <h4>my travel journal</h4> 
        </div>
    )
}