// This component renders 3 random pics and some lorem picsum text block
import React from 'react';
import popularModelsData from '../../popularModelsData';

const PopularModels = () => {
  const popularModels = popularModelsData.map(({ id, heading, src }) => (
    <div className="col p-2" key={id}>
      <h3 className='fw-bold mb-4'>{heading}</h3>
      <img
        src={src}
        className="rounded-circle border border-dark mb-3"
        alt="cyclists on the road" />
      <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo!</p>
    </div>

  ))
  return (
    <section className="container-fluid text-center mt-5">
      <div className="row">
        {popularModels}
      </div>
    </section>
  );
}

export default PopularModels;