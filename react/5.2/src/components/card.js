function Card(props){

return(
    <div className="container">
    <h1>{props.titel}</h1>
    <img src={props.url}></img>
    <h2>{props.description}</h2>
    <a href={props.link}>{props.linkname}</a>
   

    </div>

)
}
export default Card;