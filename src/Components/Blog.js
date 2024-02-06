import React from 'react'

function Blog({ url, imgUrl, title, description, category }) {
    return (
        <a href={url}
            target='_blank'
            className='container mx-auto flex flex-col rounded-md max-w-md gap-5'>
            <div>
                <img src={imgUrl} 
                alt='blog' className='rounded-lg overflow-hidden w-[30em] object-cover h-[15em] bg-white' />
            </div>
            <div className="flex flex-col text-left space-y-5">
                <p className="text-blue text-lg font-semibold">{category}</p>
                <h2 className="text-xl font-bold text-black dark:text-white">{title}
                </h2>
                <p className="text-gray-300" id="line-clamp-3">{description}</p>
            </div>
        </a>
    )
}

export default Blog