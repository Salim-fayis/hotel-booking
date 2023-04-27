import React from 'react'
import AboutCard from './AboutCard'
import './About.css';
import HeadTitle from '../../common/Navbar/HeadTitle/HeadTitle';

function About() {
  return (
    <>


    <HeadTitle />

    <section className='about top'>
        <div className='container'>
            <AboutCard/>
        </div>
    </section>

    <section className='features top'>
        <div className='container aboutCard flex_space'>
            <div className='row row1'>
                <h1>Our 
                    <span> Features</span>
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi recusandae amet est rerum dicta, nisi dolor reprehenderit corrupti odio commodi magnam obcaecati consequatur id temporibus architecto sapiente exercitationem atque. </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam architecto reprehenderit obcaecati incidunt repellat, iusto impedit deserunt quam illum consequatur accusantium voluptate fugiat totam error, magnam amet, et quis non!</p>
        <button className='secondary-btn'>
        Explore More <i className='fas fa-long-arrow-alt-right'></i>
       </ button>
            </div>
            <div className='row image'>
                <img src="/images/feature-img-1.jpg" alt="" />
                <div className='control-btn'>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About