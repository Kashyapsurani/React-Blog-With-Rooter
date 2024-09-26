import './Card.css'

function Card({image,heding,paragraph}) {
  return (
    <>
    
     <div className="card">
        <div className="img">
            <img src={image} alt="" width={"100%"} height={"auto"} />
        </div>
        <h1 className="heding">
            <h4>{heding}</h4>
        </h1>
        <div className="p">
            <p>{paragraph}</p>
        </div>
     </div>
 
    </>
  )
}

export default  Card
