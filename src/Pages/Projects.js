import React from 'react'
import pro1 from "../Assets/pro1.png"
import pro2 from "../Assets/pro2.png"
import pro3 from "../Assets/pro3.png"
import pro4 from "../Assets/pro4.png"
import pro5 from "../Assets/pro5.gif"
import pro6 from "../Assets/pro6.png"
import pro7 from "../Assets/pro7.png"
import pro8 from "../Assets/pro8.png"

import { Helmet } from "react-helmet"
import ProjectItem from '../Components/ProjectItem'

const projects = [
  {
    item: 6,
    title: "Apollo Music Player",
    img: pro2,
    source: "https://github.com/tarunsinghofficial/Apollo-Player-Music-Streaming-App"
  },
  {
    item: 5,
    title: "The NewsXTimes (React Native, NewsAPI)",
    img: pro1,
    source: "https://github.com/tarunsinghofficial/News-App-React-Native"
  },
  {
    item: 4,
    title: "OneDevPlace (Next.js, AppWrite, Wordpress API)",
    img: pro4,
    source: "https://github.com/tarunsinghofficial/OneDevPlace"
  },
  {
    item: 7,
    title: "LinkedIn Learn Clone (React Native)",
    img: pro5,
    source: "https://github.com/tarunsinghofficial/Linkedin-Learn-Clone"
  },
  {
    item: 1,
    title: "QR Code Generator (Next.js)",
    img: pro8,
    source: "https://github.com/tarunsinghofficial/Qr-Code-Generator-NextJS"
  },
  {
    item: 2,
    title: "Netflix Clone (Next.js, Tailwind, MUI)",
    img: pro7,
    source: "https://github.com/tarunsinghofficial/Netflix-clone-nextjs"
  },
  {
    item: 3,
    title: "Movie Discovery App (Next.js, Tailwind)",
    img: pro6,
    source: "https://github.com/tarunsinghofficial/NextJS-Movie"
  }
]

projects.sort((a, b) => a.item - b.item);

function Projects() {
  return (
    <>
      <Helmet>
        <title>Project | Tarun Singh</title>
      </Helmet>
      <section className="bg-white dark:bg-dark">
        <div className="flex items-center justify-center" data-aos="fade-right">
          <h1 className="text-4xl font-bold text-blue">Projects</h1>
        </div>
        <div className="flex flex-col flex-wrap justify-center md:flex-row gap-4 mt-10">
          {projects.map(function (d, index) {
            return (
              <div key={index}
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
                className='p-4'
                >
                <ProjectItem
                  title={d.title}
                  project={d.img}
                  link={d.source}
                />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Projects