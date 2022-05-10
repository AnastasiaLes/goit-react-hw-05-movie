import { NavLink } from 'react-router-dom';
import { AditionalInfoLinks, AditionalInfoWrap } from './MovieDetailsView.styled';

export function AditionalInfo(movieId) {

    return (
        <AditionalInfoWrap>
            <h3>Aditional information</h3>
            <AditionalInfoLinks>
                <NavLink to={`/goit-react-hw-05-movie/movies/${movieId}/cast`}>Cast</NavLink>
                <NavLink to={`/goit-react-hw-05-movie/movies/${movieId}/reviews`}>Reviews</NavLink>
            </AditionalInfoLinks>
        </AditionalInfoWrap>
    )
}