import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { FetchMovie } from "Services/API";
import { MovieWrap, GoBackButton, MovieDetails, Genres } from "./MovieDetailsView.styled";
import { AditionalInfo } from "./AditionalView";

function MovieDitails() {
   
  
    const {MovieId} = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    const imgPath = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    useEffect(() => {
        FetchMovie(MovieId)
            .then(data => setMovie(data))
            .catch(error => console.log('Error: ', error));
    }, [MovieId]);

    const onButtonClick = () => {
        navigate(-1)
    }
    
    return (
        <div>
          <div>
           <MovieWrap>
        <div>
        <GoBackButton type="button" onClick={onButtonClick}>Go back</GoBackButton> 
        <img src={imgPath} alt={movie.title} width="400" /> 
       </div>
        
        {movie && 
            <MovieDetails>
                {movie.release_date &&
                <h2> {movie.title} ({movie.release_date.substr(0, 4)})</h2>
                }
                <p><b>User score:</b> {movie.vote_average*10}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <Genres>
                {movie.genres &&  
                    movie.genres.map((genre) => <div key={genre.id}>{genre.name}</div>)}    
               </Genres> 
                
            </MovieDetails> }
                </MovieWrap> 
            
            {AditionalInfo(MovieId)}
        </div>
        <Outlet />  
        </div>
        
        
       
        
)
}

export default MovieDitails;