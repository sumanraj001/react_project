import {ReactNode} from 'react'


}

const ServiceCard=({title,icon,desc}:PropsType)=> {
  return <>
  <div className='flex gap-4 items-center'>
    <div className='text-[40px ] text-primanry'>{PropsType.icon} </div>
    <div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-sm sm:text-[16px] text-gray-600' >{desc}</p>
    </div>

   

  </div>
  </>
};

export default ServiceCard;