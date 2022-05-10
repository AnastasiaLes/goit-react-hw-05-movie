import { useEffect, useState } from "react";
import { Outlet, Link, useSearchParams, useLocation } from "react-router-dom";
import { FetchQuery } from "Services/API";
import { MovieSearchWrap } from "./MovieSearch.styled";


function MoviesSearch() {
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [inputCange, setInputChange] = useState('');
    const [results, setResults] = useState([]);
    let [, setSearchParams] = useSearchParams();
 

    const onInputChange = (event) => {
        setInputChange(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        
        event.preventDefault()
        setQuery(inputCange)
        setSearchParams(inputCange)
    }

    useEffect(() => {
        query && 
            FetchQuery(query).then((data) => setResults(data.results))
        
    }, [query])


    return (
        <MovieSearchWrap>
                <form onSubmit={onSubmit}>
                    <input type="input" placeholder="Find movie" onInput={onInputChange} />
                    <button type="submit" >Search</button>
            </form>
            
            {/* <Routes>
                <Route to={{pathname: '/goit-react-hw-05-movie/movies/query'}}
                     element={<SearchResults results={results} query={searchParams} />}></Route>
            </Routes> */}
                <div>
                 { query.length === 0 && <p>Enter what you are looking</p>
                }
                {results.length > 0 && 
                    results.map(film =>
                    <li key={film.id}>
                            <Link to={{
                                pathname: `/goit-react-hw-05-movie/movies/${film.id}`,
                                state: {from: location}
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
)}

export default MoviesSearch;