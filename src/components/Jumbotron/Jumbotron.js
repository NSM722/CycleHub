// This component serves the purpose of rendering a 'Jumbotron' like container on the page

import React from 'react';

const Jumbotron = () => {
  return (
    <>
      <main>
        <div className="mt-1 mb-4 p-1 bg-light text-dark fs-4">
          <div className="container text-center">
            <h1 className="fw-bolder">Welcome To Our Marketplace</h1> 
            <p className='fs-3'>This is the place where trusted private sellers 
              and smart buyers meet for trading electric bikes.
              <br />
              Here is a list of all the models available.
              <br />
              Please bear with us as we are working on listing
              the <b>top 3 popular models</b>
            </p> 
          </div>
        </div>
      </main>
    </>
  );
}

export default Jumbotron;