import { Card } from "react-bootstrap";
import movies from "./movies";
import { FaPlus } from "react-icons/fa";

export default function MovieCard( {title, image, description, rating} ){

  
   return(
    <div className="main-card">

    <Card className="sage-card" style={{ width: '19rem' }}>
      <Card.Img variant="top" src= {image} className="movie-image"/>
      <Card.Body className="content">
        <Card.Title> <h3> {title} </h3>  </Card.Title>
        <Card.Text>
          <p className="details"> {description} </p>
          <span>Rating: {rating} </span>
        </Card.Text>
        <div className="btn-grid">
            <div>
              <button className="play-btn"> ▶ Play Now</button>
            </div>
            <div>
              <button className="play-btn"><FaPlus /> Add to My List</button>
            </div>
        </div>
      </Card.Body>
    </Card>


      </div>
   );
}

