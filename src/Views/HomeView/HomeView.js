import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from "services/api";

// Fetch().then((data) => console.log(data));
function HomePage() {
    const [films, setFilms] = useState([]);
    const location = useLocation();
    // const [status, setStatus] = useState('')
    
    // const match = UseRouteMatch();
    useEffect(() => {
         fetchTrending()
             .then(films => {
                 setFilms(films.results);
                //  console.log(location);
             }
        // if (films.length !== 0) {
        //     //   setStatus('pending');
        //     Fetch()
        //         .then(films => setFilms(films.results)
                // {
                //     if (films.results.length > 0) {
                //         setFilms(films.results);
                //         // setStatus('resolved');
                //         return;
                //     }
                //     //   setStatus('rejected');
                // }
                )
                // .catch(error => {
                //     //   setStatus('rejected');
                //     //   setError(error);
                //     console.log(error);
                // });
        // }
    }, []);

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