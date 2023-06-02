import data from "./airports.json";
import { Card } from "../Card";

 /*
 export const Airport = () => {
    const [ data, setData] = useState("");

    useEffect(()=>{
        fetch("https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOGUyMWY2ODk0NjhiYWE4YzVlYmJmMjI2YzVkNDhmN2E0MWU4NGQxZDVkNWIwODI1ZmQ2N2QxOGE1NjA3ODY5MjI4N2JiNGE2NDg3ZTYwZDAiLCJpYXQiOjE2ODU3MjY0NTYsIm5iZiI6MTY4NTcyNjQ1NiwiZXhwIjoxNzE3MzQ4ODU2LCJzdWIiOiIyMTA4NyIsInNjb3BlcyI6W119.RU4fgFVCxajlOECKlxkPOWwXHnFTPMm-jXpPFj5YQ-sUTbf1hYMofSDnjxJ6qFTFywds2HaM3MU-wOY5pp701A")
            .then(resp=>resp.json())
            .then(json=>{ 
                console.log(json);
            }).catch(error => console.log(error))
        }
    )

    return (
        <p>
            
        </p>
    )
};
*/

const dataArray = data.data.slice(0, 30)

export const Airport = () => {

    console.log(dataArray)

    return (
        <div>
            {dataArray.map((el, i)=> 
            <Card
            key={i}
            airlineName={el.airline.name} 
            departureGate={el.departure.gate} 
            estimatedTime={(new Date(el.departure.estimatedTime).toLocaleString())} 
            terminal={el.departure.terminal} />  
            )}   
        </div>
    )
}