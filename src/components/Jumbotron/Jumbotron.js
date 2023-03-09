// This component serves the purpose of rendering a 'Jumbotron' like container on the page

import React from 'react';

const Jumbotron = () => {
  return (
    <section className="mt-1 mb-4 p-1 bg-light text-dark fs-4">
      <div className="container text-center">
        <h1 className="fw-bolder">Welcome To Our Marketplace</h1>
        <p className='fs-3'>This is the place where trusted private sellers
          and smart buyers meet to trade e-bikes.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam!
          <br />
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe,
            nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo!</b>
        </p>
      </div>
    </section>
  );
}

export default Jumbotron;