import React from 'react';
import stockData from './../../stockData';
import {
  convertToLowerCase,
  getBikeModelsCount,
  getUniqueBikes,
  sortInDescendingOrder
} from './../../helpers';



const Hero = () => {
  const bikeModels = convertToLowerCase(stockData)
  const bikeModelsCount = getBikeModelsCount(bikeModels)
  const uniqueBikes = getUniqueBikes(bikeModelsCount)
  const sortedUniqueBikes = sortInDescendingOrder(uniqueBikes)

  let bikesToDisplay = sortedUniqueBikes.map((itemToDisplay, index) => (
    <li
      key={index}
      className='list-group-item list-group-item-dark fs-4 fw-bold'>
      {`${itemToDisplay.bikeType.toUpperCase()}  -------> (${itemToDisplay.count} in stock)`}
    </li>
  ))

  return (
    <section>
      <div className='container'>
        <h2 className='text-center fw-bolder my-3 text-danger'>HURRY AND GRAB YOURSELF THE BELOW POPULAR MODELS!!!</h2>
        <ul className='list-group'>
          {bikesToDisplay}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
