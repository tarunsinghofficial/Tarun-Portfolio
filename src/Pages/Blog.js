import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import MainBlog from "../Components/MainBlog";
import Blog from "../Components/Blog";

const blogData = [
    {
        item: 1,
        title: 'Mastering Next.Js Authentication With Auth0: A Practical Guide',
        description: 'Authentication is a crucial aspect of web applications, ensuring that only authorized users can access specific resources or perform certain actions. This article will examine how we can add authentication to a Next.js application using Auth0, a powerful authentication and authorization platform.',
        imgUrl: 'https://blog.openreplay.com/images/nextjs-authentication-with-auth0/images/hero.png',
        url: 'https://blog.openreplay.com/nextjs-authentication-with-auth0/',
        category: 'Frontend, Auth'
    },
    {
        item: 2,
        title: 'How to Add Dark Mode in ReactJS Using Material UI',
        description: 'Material UI framework is an open-source user interface framework for React that follows the principles of Google’s Material Design. It offers a variety of components allowing developers to create appealing and user-friendly interfaces, without starting from scratch.',
        imgUrl: 'https://oceanobe.com/oceanobe/images/Continous-integrations-CI-_CD-for-iOS-projects-using-Semaphore-CI-min4eeb9855-50a7-4590-b9f2-dd3732461fc3.png',
        url: 'https://semaphoreci.com/blog/dark-mode-reactjs-material-ui',
        category: 'React, Material UI'
    },
    {
        item: 3,
        title: 'Managing State With Vuex in Vue.js',
        description: 'Managing state while building web applications can be very challenging when working on medium to large-scale applications. State management is an important part of Vue applications as it ensures scalability and maintainability of code, so we need to understand it properly. In this article, we will see how we can easily manage the state using a popular and powerful Vue.js library- Vuex (now Pinia). The official state management library for Vue is now changed to Pinia but don’t worry Vuex is still maintained by the team.',
        imgUrl: 'https://oceanobe.com/oceanobe/images/Continous-integrations-CI-_CD-for-iOS-projects-using-Semaphore-CI-min4eeb9855-50a7-4590-b9f2-dd3732461fc3.png',
        url: 'https://semaphoreci.com/blog/vuex',
        category: 'Software Engineering, Vue'
    },
    {
        item: 4,
        title: 'Web scraping vs. API',
        description: 'Learn the key differences between APIs and web scraping before deciding which to use.',
        imgUrl: 'https://blog.apify.com/content/images/size/w1200/2023/10/web-scraping-vs-api.jpg',
        url: 'https://blog.apify.com/web-scraping-vs-api/',
        category: 'Web Scraping, API'
    },
    {
        item: 5,
        title: 'Next VS React',
        description: 'JavaScript has become more powerful and popular. It has a vast ecosystem and a large community which is increasing rapidly. React has become the most loved and used JavaScript library among developers to create Single Page Application and Next is an open-source web development React-based framework created by Vercel, which is famous for its unique features such as Server-side rendering and enhanced SEO.',
        imgUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg',
        url: 'https://www.geeksforgeeks.org/nextjs-vs-reactjs-which-one-to-choose/',
        category: 'Next,js, React, Web Development'
    },
    {
        item: 6,
        title: 'How to Render an Array of Objects in React? [in 3 easy steps]',
        description: 'In this blog, we’ll learn how to render an array of objects or data items in a react component with JSX and work on react map array of objects, keys in react, and how you can filter out data items with the help of JavaScript methods.',
        imgUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png',
        url: 'https://guvi.in/blog/how-to-render-an-array-of-objects-in-react/',
        category: 'React, Web Development'
    },
]

const portfolio = [
    {
        item: 1,
        title: 'OpenReplay',
        description: 'A Front-End Developer and Technical Writer with several years of relevant experience, passionate about creating appealing and user-friendly apps and writing technical articles.',
        imgUrl: 'https://www.finsmes.com/wp-content/uploads/2022/06/openreplay.png',
        url: 'https://blog.openreplay.com/authors/tarun-singh/',
    },
    {
        item: 2,
        title: 'Semaphore',
        description: 'I am freelance Technical Writer with a portfolio of over 400 technical articles/blogs, worked with different clients. I was also given the title of Geek of the Month award and Bronze level Technical Writer by GeeksforGeeks.',
        imgUrl: 'https://oceanobe.com/oceanobe/images/Continous-integrations-CI-_CD-for-iOS-projects-using-Semaphore-CI-min4eeb9855-50a7-4590-b9f2-dd3732461fc3.png',
        url: 'https://semaphoreci.com/author/tarun-singh',
    },
    {
        item: 3,
        title: 'GeeksforGeeks',
        description: 'Published over 380+ technical articles in different computer science domains.',
        imgUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg',
        url: 'https://auth.geeksforgeeks.org/user/tarunsinghwap7/articles',
    },
    {
        item: 4,
        title: 'Apify',
        description: 'Written article on web scraping and APIs.',
        imgUrl: 'https://blog.apify.com/content/images/size/w1200/2023/10/web-scraping-vs-api.jpg',
        url: 'https://blog.apify.com/author/tarun-singh/',
    },
    {
        item: 5,
        title: 'Tutorialspoint',
        description: 'Published over 100+ articles on web development including, React, Next.js, Material UI, Python, etc.',
        imgUrl: 'https://www.tutorialspoint.com/images/tp_logo_436.png',
        url: 'https://www.tutorialspoint.com/authors/tarun-singh',
    },
]

function BlogPage() {
    return (
        <>
            <Helmet>
                <title>Blog | Tarun Singh</title>
            </Helmet>
            <div className="bg-white dark:bg-dark">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto">

                        <h1 data-aos="fade-right" className="text-4xl font-bold text-blue">
                            Blogs/Articles
                        </h1>
                        <p className="mt-2 dark:text-gray-400 text-gray-700 text-center text-xl">
                            Checkout my latest top content published on internet.
                        </p>
                    </div>
                </div>
                <section className="container mx-auto block items-center space-y-5">
                    <MainBlog />
                    <div className="flex flex-wrap gap-5">
                        {blogData.map((data, key) => (
                            <Blog title={data.title} description={data.description} url={data.url} imgUrl={data.imgUrl} category={data.category} />
                        ))}
                    </div>
                    <div className="space-y-10">
                        <div className="container mx-auto">
                            <h1 data-aos="fade-right" className="text-4xl font-bold text-blue">
                                Find my articles on
                            </h1>
                            <p className="dark:text-gray-400 text-gray-700 text-center text-xl">
                                My clients for which I've worked for!
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {portfolio.map((data, key) => (
                                <Blog title={data.title} description={data.description} url={data.url} imgUrl={data.imgUrl} category={data.category} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BlogPage;