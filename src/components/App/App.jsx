import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";

const HomePage = lazy(() => import('../../Views/HomeView/HomeView' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../../Views/MoviesView/MoviesView' /* webpackChunkName: "movies-page" */));
const MoviesSearch = lazy(() => import('../../Views/MoviesView/MoviesSearchView' /* webpackChunkName: "movies-search-page" */));
const MovieDitails = lazy(() => import('../../Views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "movies-details" */));
const Cast = lazy(() => import('../../Views/MovieDetailsView/CastView' /* webpackChunkName: "cast" */));
const Review = lazy(() => import('../../Views/MovieDetailsView/ReviewView' /* webpackChunkName: "reviews" */));
const NotFound = lazy(() => import('../../Views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-page" */));

export function App() {
  return (
    <div>
      <Layout />
      <Suspense fallback={<h2>Loading....</h2>}>
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
  );
};