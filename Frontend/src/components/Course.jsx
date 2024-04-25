import React from 'react';
import {Link} from 'react-router-dom'
import Cards from "./Cards";
import list from '../../public/list.json'


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 items-center justify-center text-center'>

        <div>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam praesentium inventore ipsa, cumque quos quidem enim provident, accusamus tempora modi necessitatibus eveniet quaerat expedita ut in consectetur cupiditate voluptatem. Lorem ipsum periam praesentium inventore ipsa, cumque quos quidem enim provident, accusamus tempora modi necessitatibus eveniet quaerat expedita ut in consectetur cupiditate voluptatem.</p>

          <Link to='/'>
          <button className='px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-200 mt-6'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            )
              
            )
          }
        </div>

      </div>
    </>
  )
}

export default Course
