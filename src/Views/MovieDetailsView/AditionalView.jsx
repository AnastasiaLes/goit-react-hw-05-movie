import { NavLink, useLocation } from 'react-router-dom';
import { AditionalInfoLinks, AditionalInfoWrap } from './MovieDetailsView.styled';

export function AditionalInfo(movieId) {

    const location = useLocation();
    
    return (
        <AditionalInfoWrap>
            <h3>Aditional information</h3>
            <AditionalInfoLinks>
                <NavLink to={{
                    pathname: `/goit-react-hw-05-movie/movies/${movieId}/cast`,
                    state: { from: location }
                }}>Cast</NavLink>
                <NavLink to={{
                    pathname: `/goit-react-hw-05-movie/movies/${movieId}/reviews`,
                    state: { from: location }
                }}>Reviews</NavLink>
            </AditionalInfoLinks>
        </AditionalInfoWrap>
    )
}