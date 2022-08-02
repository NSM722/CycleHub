import React from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import NavBar from './components/NavBar/NavBar';
import PopularModels from './components/PopularModels/PopularModels';
import Footer from './components/Footer/Footer';
import stockData from './stockData';

const App = () => {
  /**
   * Looping through the stockData and getting rid of case sensitivity
   * to allow uniformity and this is done by converting all text to 
   * lowercase then replacing all dashes with spaces
   */
  const bikeModels = stockData
  .map(stockDataItem => stockDataItem.Model
  .toLowerCase()
  .replaceAll('-', ' '))
  .sort()

  //console.log(bikeModels)

  /*Initializing a variable to hold the bike model
  * types with their respective counts
  */
  const bikeModelsCount = bikeModels
  // Looping through every item in the bikeModels array above on line(9)
  .map(item => ({
    // setting up an object with a property to hold the bike type model name
    bikeType: item,
    // This count property will have the count of the models
    // by mapping through the bikeModels array above on line(9)
    count: bikeModels
    // When filtering through the models if the bike Model is equal to the item(bikeType)
    // We get the length(which is count)
    .filter(bikeModel => bikeModel === item)
    .length
  }))

  //console.log(bikeModelsCount)

  /**
   * Initializing a variable to hold unique items
   * basically removing duplicates from the bikeModelsCount array
   */
  let uniquesArray = bikeModelsCount 
  /**
   * loop through every item while keeping track of the index
   * returning that this item index is equal to the unique Item's
   * index in bikeModelsCount
   */
  .filter((uniqueItem, index) => index === bikeModelsCount
  /**
   * Looping through the array filtered above to compare the 
   * properties of the current element(i.e bikeType and count)
   * are equal to the same properties of the uniqueItem(i.e bikeType and count)
   */
  .findIndex(element => element.bikeType === uniqueItem.bikeType && element.count === uniqueItem.count))

  //console.log(uniquesArray)

  /**
   * Sorting the uniquesArray by number(i.e uniquesArray.count)
   * in descending order
   */
  const sortedUniquesArray = [...uniquesArray]
  .sort((a, b) => b.count - a.count)
  // Editing the array to have data only till index 2
  .splice(0, 3)
  //console.log(sortedUniquesArray)

  return (
    <>
      <NavBar />
      <Jumbotron />
      <hr />
          <>
            <section>
              <div className='container'>
                <h2 className='text-center fw-bolder my-3 text-danger'>HURRY AND GRAB YOUSELF THE BELOW POPULAR MODELS!!!</h2>
                <ul className='list-group'>
                    {
                      // Looping through the sorted array to display
                      // the first 3 models
                      sortedUniquesArray.map((itemToDisplay, index) => {
                        return (
                          <li key={index}
                          className='list-group-item 
                          list-group-item-dark
                          fs-4 fw-bold'>
                              {`${itemToDisplay.bikeType.toUpperCase()}  -------> (${itemToDisplay.count} in stock)`}
                          </li>
                        )
                      })
                    }
                </ul>
              </div>
            </section>
          </>        
      <hr />
      <PopularModels />
      <Footer />
    </>
  );
}
export default App;
