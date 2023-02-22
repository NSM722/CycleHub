import React from 'react';
import stockData from './../../stockData';
import {
  convertToLowerCase,
  getBikeModelsCount,
  getUniqueBikes,
  sortInDescendingOrder
} from './../../helpers';
import { v4 as uuidv4 } from 'uuid';



const Hero = () => {
  const bikeModels = convertToLowerCase(stockData)
  const bikeModelsCount = getBikeModelsCount(bikeModels)
  const uniqueBikes = getUniqueBikes(bikeModelsCount)
  const sortedUniqueBikes = sortInDescendingOrder(uniqueBikes)

  let bikesToDisplay = sortedUniqueBikes.map(({ bikeType, count }) => (
    <li
      key={uuidv4()}
      className='list-group-item list-group-item-dark fs-4 fw-bold'>
      {`${bikeType.toUpperCase()}  -------> (${count} in stock)`}
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
