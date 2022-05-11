import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';


function HomePage() {
    const [films, setFilms] = useState([]);
    const location = useLocation();
 
    useEffect(() => {
         fetchTrending()
             .then(films => setFilms(films.results)
                )
    }, [films]);

    return (
        <div>
            <h2> Trending tooday</h2>
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        <Link to={{
                            pathname: `/goit-react-hw-05-movie/movies/${film.id}`,
                            state: {from: location}
                        }
                            }>{film.title}</Link>
                    </li>
            ))}
            </ul>
            
        </div>
)
}

export default HomePage;