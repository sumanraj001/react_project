import React from 'react'
interface PropsType{
    img:String;
    desc:String;
}

function BlogCard({img,desc}:PropsType) {
  return (
    <div className='hover:shadow-2xl cursor-pointer'>
        <div >
            <img  className='w-full ' src={img} alt='blogimage'/>


        </div>
        <div className='px-6 py-8 bg-white'>
            <div className='flex justify-between items-center text-gray-500 pb-4'>
                <p>By:Admin</p>
                <p>28 falgun 2080</p>

            </div>
            {desc}

        </div>

    </div>
  )
}

export default BlogCard