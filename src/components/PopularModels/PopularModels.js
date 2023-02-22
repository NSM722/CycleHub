// This component renders 3 random pics and some lorem picsum text block
import React from 'react';

const PopularModels = () => {
  return (
    <>
      <section>
        <div className="container-fluid text-center mt-5">
          <div className="row">
            <div className="col p-2">
              <h3 className='fw-bold mb-4'>Heading 1</h3>
              <img src="https://picsum.photos/id/1077/300" className="rounded-circle border border-dark mb-3" alt="cyclists on the road" />
              <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo!</p>

            </div>
            <div className="col p-2">
              <h3 className='fw-bold mb-4'>Heading 2</h3>
              <img src="https://picsum.photos/id/146/300" className="rounded-circle border border-dark mb-3" alt="tiny red bicycle chained to a pole" />
              <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo!</p>

            </div>
            <div className="col p-2">
              <h3 className='fw-bold mb-4'>Heading 3</h3>
              <img src="https://picsum.photos/id/212/300" className="rounded-circle border border-dark mb-3" alt="parking space for bikes on a street" />
              <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo!</p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularModels;