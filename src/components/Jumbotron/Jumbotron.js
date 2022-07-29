// This component serves the purpose of rendering a 'Jumbotron' like container on the page

import React from 'react';

const Jumbotron = () => {
  return (
    <>
      <main>
        <div className="my-1 p-1 bg-light text-dark fs-4">
          <div className="container text-center">
            <h1 className="fw-bolder">Welcome To Our Marketplace</h1> 
            <p>This is the place where trusted private sellers 
              and smart buyers meet for trading electric bikes.
              <br />
              Hurry and search for a product below!
            </p> 
          </div>
        </div>
      </main>
    </>
  );
}

export default Jumbotron;