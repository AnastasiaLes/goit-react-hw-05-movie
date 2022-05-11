import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api.jsx";


function Review() {
    const {MovieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews(MovieId).then(data => {
            setReviews(data.results);
        }).catch(error => console.log('Error: ', error));
    }, [MovieId]);

    return (
        <ul>
            
            {reviews.length === 0 ? <p>We don't have any reviews for this movie.</p>
            : reviews.map(review => 
                < li key = {review.id } >
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                </li>
            )}  
        </ul>
    )
}

export default Review;