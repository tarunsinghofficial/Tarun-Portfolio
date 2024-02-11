import React from 'react'

function MainBlog() {
  return (
    <a href='https://blog.openreplay.com/i18n-in-next-14/' target='_blank' className='px-2 py-4 w-full flex flex-col md:flex-row lg:flex-row rounded-md gap-5 items-center  justify-center'>
        <div>
            <img src='https://blog.openreplay.com/images/i18n-in-next-14/images/hero.png' alt='blog' className='rounded-lg overflow-hidden w-[75em] h-[15em]' />
        </div>
        <div className="flex flex-col text-left space-y-5">
            <p className="text-blue text-lg font-semibold">Frontend</p>
                <h2 className="text-3xl font-bold text-black dark:text-white">Mastering Multilingual Websites: Internationalization In Next.Js 14</h2>
                <p className="dark:text-gray-400 text-gray-700" id="line-clamp-3">In the rapidly evolving digital landscape, creating websites that cater to a global audience is not just an option but a necessity. Internationalization, or i18n, plays a pivotal role in web development, ensuring that your content reaches a global audience in different languages and regions seamlessly. This article will show you how to work with i18n in Next.js</p>
            </div>
    </a>
  )
}



export default MainBlog