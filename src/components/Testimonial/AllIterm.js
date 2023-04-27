import React from 'react'
import Cards from './Cards'

import './Testimonial.css'
import Tdata from './Tdata'



function AllIterm() {
  return (
    <>
   <section className='Testimonial mtop'>
    <div className="container grid1">
      {Tdata.map((value,index)=>{
       return <Cards key={index} {...value}/>
      })}
    </div>
   </section>
    </>
  )
}

export default AllIterm