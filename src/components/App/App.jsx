import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from '../../Views/HomeView/HomeView';
import { MoviesPage } from 'Views/MoviesView/MoviesView';
import { NotFound } from 'Views/NotFoundView/NotFoundView';
import { Cast } from 'Views/MovieDetailsView/CastView';
import { MovieDitails } from 'Views/MovieDetailsView/MovieDetailsView';
import { Review } from 'Views/MovieDetailsView/ReviewView';
import {MoviesSearch } from '../../Views/MoviesView/MoviesSearchView'

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route index element={<MoviesSearch />} />
            <Route exact path=":MovieId" element={<MovieDitails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        

      </Routes>
    </div>
  )
}
