import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('../../Views/HomeView/HomeView' /* webpackChunkName: "home-page" */));
const Cast = lazy(() => import('../../Views/MovieDetailsView/CastView' /* webpackChunkName: "caast" */));
const Layout = lazy(() => import('../Layout/Layout' /* webpackChunkName: "layout" */))
const MoviesPage = lazy(() => import('../../Views/MoviesView/MoviesView' /* webpackChunkName: "movies-page" */));
const NotFound = lazy(() => import('../../Views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-page" */));
const MovieDitails = lazy(() => import('../../Views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "movie-details-page" */));
const Review = lazy(() => import('../../Views/MovieDetailsView/ReviewView' /* webpackChunkName: "reviews-page" */));
const MoviesSearch = lazy(() => import('../../Views/MoviesView/MoviesSearchView' /* webpackChunkName: "movies-search-page" */));
// const SearchResults = lazy(() => import('../../Views/MoviesView/MovieSearchResults'))

export function App() {
  return (
    <div>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>              
          <Route path="/goit-react-hw-05-movie/" element={<HomePage />} />
          <Route path="/goit-react-hw-05-movie/movies/*" element={<MoviesPage />}>
            <Route path="*" element={<MoviesSearch />} />
            
              <Route exact path=":MovieId/*" element={<MovieDitails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Review />} />
              </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      
    </div>
  )
}
