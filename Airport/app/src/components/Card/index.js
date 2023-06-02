import style from "./style.module.css"

export const Card = ({airlineName, departureGate, estimatedTime, terminal}) => {
    return (
        <div className={style.card}>
           <p>Name of airline: {airlineName}</p>
           <p>Gate: {departureGate}</p>
           <p>Estimated time: {estimatedTime} </p>
           <p>Terminal: {terminal}</p>
        </div>
    )
}