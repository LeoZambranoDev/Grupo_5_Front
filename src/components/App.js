import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import BrandsInDb from './BrandsInDb';
import LastProductInDb from './LastProductInDb';
import ContentRow from './ContentRow';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div id="wrapper">
      {/* <SideBar /> */}
      <Routes>
        <Route exact path="/" element={ <ContentWrapper />} />
        <Route path="/BrandsInDb" element={<BrandsInDb />} />
        <Route path="/LastMovieInDb" element={<LastProductInDb />} />
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="/SearchMovies" element={<SearchMovies />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;
