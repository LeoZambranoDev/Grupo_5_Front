import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRow from './ContentRow';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Routes>
        <Route exact path="/" element={ <ContentWrapper />} />
        <Route path="/GenresInDb" element={<GenresInDb />} />
        <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="/SearchMovies" element={<SearchMovies />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;
