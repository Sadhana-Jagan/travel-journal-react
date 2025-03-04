import marker from "/travel-journal-react/public/images/marker.png"

export default function Place(props){
    return (
        <>
        <div className="place">
            <img className="place-img" src={props.img.src} alt={props.img.alt}/>
            <div>
                <div className="maps">
                    <img className="marker" src={marker} alt="marker"/>
                    <h4 className="place-text">{props.country}</h4>
                    <a href={props.googleMapslink}>View on Google Maps</a>
                </div>
                <h1 className="place-text">{props.location_name}</h1>
                <h3>{props.dates}</h3>
                <p>
                   {props.text}
                </p>
            </div>
        </div>
        
        </>
    )
}