import { useEffect, useState } from "react";
import { Outlet, Link, useSearchParams, useLocation } from "react-router-dom";
import { fetchQuery } from "services/api.jsx";
import { MovieSearchWrap } from "./MovieSearch.styled";


function MoviesSearch() {
    const [, setSearchParams] = useSearchParams();
    const searchQuery = (new URL(document.location)).searchParams.get('query');
    const location = useLocation();
    const [query, setQuery] = useState(searchQuery || '');
    const [inputCange, setInputChange] = useState('');
    const [results, setResults] = useState([]);

    const onInputChange = (event) => {
        setInputChange(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        
        event.preventDefault()
        setQuery(inputCange)
        setSearchParams(`query=${inputCange}`)
    }

    useEffect(() => {
        query && 
            fetchQuery(query).then((data) => {
                setResults(data.results)
                
                // console.log(location);
            })
        
    }, [query])


    return (
        <MovieSearchWrap>
            <form onSubmit={onSubmit}>
                <input type="input" placeholder={searchQuery || 'Find movie'} onInput={onInputChange} />
                <button type="submit" >Search</button>
            </form>
            
            {/* <Routes>
                <Route to={{pathname: '/goit-react-hw-05-movie/movies/query'}}
                     element={<SearchResults results={results} query={searchParams} />}></Route>
            </Routes> */}
            <div>
                {query.length === 0 && <p>Enter what you are looking</p>
                }
                {results.length > 0 &&
                    results.map(film =>
                        <li key={film.id}>
                            <Link to={{
                                pathname: `/goit-react-hw-05-movie/movies/${film.id}`,
                                search: `query=${query}`,
                                state: { from: location },
                            }
                            }>{film.title}</Link>
                        </li>)
                }
                {(results.length === 0 && query.length !== 0) &&
                    <h2>Nothing was found</h2>
                
                }
                 
            </div>
            <Outlet />
            
        </MovieSearchWrap>
    );
}

export default MoviesSearch;