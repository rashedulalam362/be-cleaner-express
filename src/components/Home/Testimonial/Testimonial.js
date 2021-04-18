import React from 'react';
import davis from '../../../images/dan davis.jpg'
import grace from '../../../images/grace hall.jpg';
import kate from '../../../images/kate dis.jpg';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
const TestimonialData=[
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'dan davis',
        from : 'USA',
        img : davis
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'grace hall',
        from :  'California',
        img : grace 
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'kate dis',
        from : 'uk',
        img : kate
    }


]

const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck mt-5">
            {
                     TestimonialData.map(testimonial=><TestimonialDetails testimonial={testimonial} key={testimonial.name}></TestimonialDetails>)
                 }

             </div>
        </div>
    </section>
    );
};

export default Testimonial;