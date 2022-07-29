import React, {useState, useEffect} from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import PopularModels from './components/PopularModels/PopularModels';
import SearchBar from './components/SearchBar/SearchBar';


const App =  () => {
  // Another piece of state
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    // Fetching data of 15 products from the given API endpoint
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(res => res.json())
      .then(productsArr => {
        // console.log(productsArr);
        const newProductsstate = productsArr.map(product => {
          return product.title
        })
        setProductsState(newProductsstate)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <NavBar />
      <Jumbotron />
      {/* Loading data from an e-commerce API https://fakestoreapi.com/docs */}
      <SearchBar products={productsState} />
      <hr />
      <PopularModels />
    </>
  );
}

export default App;
