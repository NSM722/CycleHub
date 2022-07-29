import React, {useState} from 'react';

// Create the arrow component for a search bar
const SearchBar = (props) => {

  // Create a state variable for the input value text
  // Leave the input in the useState the default zero
  // or include a string which the user can erase when typing 
  const [searchValue, setSearchValue] = useState("")

  // Executed in the event listener onChange
  // when the user attempts to type a character in the search bar
  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  // Function that clears input in the search bar
  const handleClearClick = (event) => {
    setSearchValue(event.target.value = "");
    // OR setSearchValue("");
  }

  // A boolean named variable expression that determines 
  // whether the clear button should be displayed or not
  // this expression is reduced to values 'true' or 'false'
  const shouldDisplayClearBtn = searchValue.length > 0;
  // console.log(shouldDisplayClearBtn);

  // Function that filters the items according to text 
  // typed by the user in the search bar 
  /* OPTION:1 const filteredProducts = products.filter(product => {
    return product.includes(searchValue)
  })*/

  // OPTION:2
  const filteredProducts = props.products.filter(product => {
    return product.includes(searchValue)
  })

  return (
    <>
      <section>
        <div className='container text-center'>
          <input type="text" 
          className="form-control fs-5"
          value={searchValue} 
          onChange={handleInputChange}
          placeholder="Search an item..."
          />
          <br/>
          {searchValue}
          <br/>
          {/* option 1 for button to clear input in the search button */}
          {/*<button onClick={handleClearClick}>clear</button>*/}

          {/* option 2 using conditional rendering(short circuit evaluation) */}
          {/* Logic that allows the clear button to */}
          {/* go on display only when the users types input */}
          {shouldDisplayClearBtn && 
          <button
          type="button" 
          className="btn btn-outline-dark btn-sm" 
          onClick={handleClearClick}>
          clear
          </button>
          }
          <br />
          {/* Render/map all the products available in my store as a list */}
          <h2 className="fw-bold fs-3">Products available are:</h2>
          <ul className="products-list fs-5">
            {filteredProducts.map(product => {
              // key product must be included when using map
              // it's an identifier for each item
              return <li key={product}>{product}</li>
            })}
          </ul>
      </div>
      </section>
    </>
  );
}

export default SearchBar;
