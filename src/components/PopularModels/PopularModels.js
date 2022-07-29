// This component renders 3 random pics and some lorem picsum text block
import React from 'react';

const PopularModels = () => {
  return (
    <>
      <section>
        <div className="container-fluid text-center fs-5">
          <div className="row">
              <div className="col p-2">
                  <img src="https://picsum.photos/id/1077/300" className="rounded-circle border border-dark mb-3" alt="highway"/>  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo! Dignissimos animi ad vitae doloremque pariatur nostrum, excepturi voluptatum nihil, veniam sequi dolorum? Ipsa.</p>  

              </div>
              <div className="col p-2">
                  <img src="https://picsum.photos/id/146/300" className="rounded-circle border border-dark mb-3" alt="lamps" /> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo! Dignissimos animi ad vitae doloremque pariatur nostrum, excepturi voluptatum nihil, veniam sequi dolorum? Ipsa.</p>  
  
              </div>
              <div className="col p-2">
                  <img src="https://picsum.photos/id/212/300" className="rounded-circle border border-dark mb-3" alt="pedestrian" />  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis ducimus aperiam! Voluptatem expedita tempore cumque saepe, nulla porro inventore praesentium sapiente aut illo voluptas quia nemo at ipsam soluta quidem ullam iure in odio explicabo! Dignissimos animi ad vitae doloremque pariatur nostrum, excepturi voluptatum nihil, veniam sequi dolorum? Ipsa.</p>  

              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularModels;