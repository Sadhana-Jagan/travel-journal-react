import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from "./Header.jsx"
import PlaceComponent from "./Japan.jsx"
import Places from "./data.js"


const elements = Places.map((element) =>{
  return <PlaceComponent 
          key={element.id}
            {...element}
          />
})

createRoot(document.getElementById('root')).render(
  <>
    <HeaderComponent/>
    {elements}
  </>
)
