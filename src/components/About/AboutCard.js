import React from 'react'
import './About.css';


function AboutCard() {
  return (
    <>
   <div className='aboutCard mtop flex_space'>
    <div className='row row1'>
        <h4>About Us</h4>
        <h1>We
            <span> provide Solution</span> to grow your business
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi recusandae amet est rerum dicta, nisi dolor reprehenderit corrupti odio commodi magnam obcaecati consequatur id temporibus.  </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam architecto reprehenderit obcaecati incidunt repellat, iusto impedit deserunt quam illum consequatur.</p>
       <button className='secondary-btn'>
        Explore More <i className='fas fa-long-arrow-alt-right'></i>
       </button>
    
    </div>


    <div className='row image'>
        <img src="/images/about-img-1.jpg" alt="" />
        <div className='control-btn'>
            <button className='prev'>
            <i className='fas fa-play'></i>
            </button>
            
        </div>
    </div>


   </div>

    </>
  )
}

export default AboutCard