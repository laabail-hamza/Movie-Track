import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie}) {
  return (
    <div className='ms-5' style={{ width: '16rem', height: '12rem' , display: 'inline-block' }}> 
    <Card className="ms-3 m-5" style={{ width: '16rem', height: '12rem' , display: 'inline-block' }}>
      <div>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      <Button 
          variant="primary" 
          style={{
            position: 'absolute', 
            top: '8px', // Espacement du haut
            right: '8px', // Espacement de la droite
            backgroundColor: 'transparent', 
            color: 'black', 
            borderColor: 'transparent'
            
          }}
        >
          ❤️
        </Button>
      </div>
      <Card.Body>
        <Card.Title style={{ width: '16rem', height: 'auto' , display: 'inline-block' }}>{movie.title}</Card.Title>
        <Card.Text>
          {movie.date}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default MovieCard;



// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function MovieCard({ movie }) {
//   return (
//     <Card className="ms-3 m-5" style={{ width: '18rem', height: 'auto' , display: 'inline-block' }}>
//       {/* Taille de la carte ajustée */}
//       <Card.Img 
//         variant="top" 
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//         alt={movie.title} 
//         style={{ height: 'auto', maxHeight: '250px', objectFit: 'cover' }} 
//       />
//       <Card.Body>
//         <Card.Title>{movie.title}</Card.Title>
//         <Card.Text>
//           {movie.release_date} {/* Remplacer par release_date */}
//         </Card.Text>
//         <Button 
//           variant="primary" 
//           style={{ backgroundColor: 'transparent', color: 'black', borderColor: 'transparent' }}
//         >
//           Voir plus
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default MovieCard;
