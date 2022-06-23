import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import BrandsInDb from './BrandsInDb';
import LastProductInDb from './LastProductInDb';
import ContentRow from './ContentRow';
import SearchMovies from './SearchMovies';
import Chart from './Chart';
import ProductDetails from './ProductDetails'

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Routes>
        <Route exact path="/" element={<ContentWrapper />} />
        <Route path="/BrandsInDb" element={<BrandsInDb />} />
        <Route path="/LastMovieInDb" element={<LastProductInDb />} />
        <Route path="/ContentRow" element={<ContentRow />} />
        <Route path="/SearchMovies" element={<SearchMovies />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;
