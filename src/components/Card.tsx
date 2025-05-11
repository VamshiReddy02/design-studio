import React from 'react'

interface CardProps {
    image: string;
    brand: string;
    product: string;
    title: string;
}

const Card: React.FC<CardProps> = ({image, brand, product, title}) => {
  return (
    <div className='w-full max-w-md'>
        <img src={image} alt='' className='w-120 h-120 object-cover ' />
        <div className='mt-4'>
            <p className='text-sm font-medium text-neutral-100'>
                <span className='font-semibold text-neutral-500'>{brand}</span> &nbsp; {product}
            </p>
            <h2 className='text-xl md:text-2xl font-normal leading-tight text-neutral-100 mt-1'>
                {title}
            </h2>
        </div>
    </div>
  )
}

export default Card