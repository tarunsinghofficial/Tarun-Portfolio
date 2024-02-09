import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Assets/avatar.png";
import { Helmet } from "react-helmet";

import "../App.css";

import AppDev from "../Assets/appdev.svg";
import Programming from "../Assets/programming.svg";
import Writer from "../Assets/writer.svg";
import Aws from "../Assets/aws-icon.svg";
import Youtube from "../Assets/youtube.svg";

import GFG from "../Assets/gfg.png";
import CM from "../Assets/cm.jpg";
import YoutubeLogo from "../Assets/youtubeLogo.png";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Tarun Singh</title>
      </Helmet>
      <div class="bg-white dark:bg-dark container mx-auto p-4">
        {/* Hero */}
        <section className="relative z-0 max-w-full">
          <div className="flex-col md:flex-row xl:my-1 flex items-center ">
            <div
              className=" md:w-4/5 xl:w-8/12 md:pt-20 sm:mt-10 space-y-5"
            >
              <h1 className="font-pop-bol text-4xl lg:text-6xl xl:text-8xl font-extrabold dark:text-white text-gray-900 text-center md:text-left max-w-5xl">
                <span className="text-4xl font-bold">Hi👋 I'm,</span>
                <br /><span>Tarun</span> Singh
              </h1>
              <h2 className="font-pop-sem-bol md:w-8/12 text-center md:text-left text-blue text-md">
                Frontend Developer, Technical Writer/Reviewer, and YouTuber
              </h2>
              <h2 className="md:w-8/12 text-justify md:text-left dark:text-gray-400 text-gray-700 text-lg">
                Currently pursuing my MCA in Software Engineering. Passionate about technology and its ever-evolving landscape,
                I aspire to be a proficient software developer while nurturing my love for writing.
                With over 3 years of experience in technical writing, I enjoy sharing my knowledge
                through technical blogs. Actively contributing to Open Source.
              </h2>
              <div className="items-center block md:items-left md:flex lg:items-left lg:flex">
                <Link to="/about" className="bg-blue py-3 px-10 lg:py-4 lg:px-15 rounded-full w-auto text-white">
                  About
                </Link>
              </div>
            </div>
            <div className="absolute lg:h-[28em] lg:w-[28em] w-[15em] h-[15em] rounded-xl bg-blue-400 top-[23em] md:top-[10em] lg:top-[10em] -z-50 left-[70%] -ml-20 md:ml-24 lg:ml-24 -translate-x-1/2 blur-3xl opacity-40 dark:opacity-70 animate-pulse bg-tint" />
            <div className="flex items-center justify-center">
              <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[23em] h-[23em] md:w-[30em] md:h-[30em] lg:w-[40em] lg:h-[40em]" // Adjust width and height as needed
              >
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(83.67, 136.184, 224.335, 1)" offset="0%" />
                    <stop id="stop2" stopColor="rgba(156.193, 203.058, 242.549, 1)" offset="100%" />
                  </linearGradient>
                  {/* Define clipping path */}
                  <clipPath id="avatarClip">
                    <path
                      d="M23.6,-27.9C30.9,-22,37.4,-14.9,38.4,-7C39.5,0.8,35.2,9.3,30.7,18.2C26.1,27,21.3,36.2,14,39.2C6.7,42.1,-3.1,38.9,-12.2,35C-21.4,31.1,-29.8,26.5,-33.3,19.6C-36.8,12.7,-35.5,3.3,-34,-6.2C-32.6,-15.7,-31,-25.3,-25.3,-31.5C-19.6,-37.6,-9.8,-40.2,-0.8,-39.2C8.2,-38.3,16.3,-33.7,23.6,-27.9Z"
                      transform="translate(50 50)"
                    />
                  </clipPath>
                </defs>
                <path
                  fill="url(#sw-gradient)"
                  d="M23.6,-27.9C30.9,-22,37.4,-14.9,38.4,-7C39.5,0.8,35.2,9.3,30.7,18.2C26.1,27,21.3,36.2,14,39.2C6.7,42.1,-3.1,38.9,-12.2,35C-21.4,31.1,-29.8,26.5,-33.3,19.6C-36.8,12.7,-35.5,3.3,-34,-6.2C-32.6,-15.7,-31,-25.3,-25.3,-31.5C-19.6,-37.6,-9.8,-40.2,-0.8,-39.2C8.2,-38.3,16.3,-33.7,23.6,-27.9Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  strokeWidth="0"
                  style={{ transition: "all 0.3s ease 0s" }}
                  stroke="url(#sw-gradient)"
                />
                {/* Image with clipping path */}
                <image
                  href="https://tarunportfolio.vercel.app/static/media/avatar.fe1e97d8ce8d9dfe2f4f.png"
                  x="0" // Adjust x position to center the image within the blob
                  y="15" // Adjust y position to center the image within the blob
                  width="100" // Adjust width
                  height="100" // Adjust height
                  clipPath="url(#avatarClip)" // Apply the clipPath to the image
                />
              </svg>

            </div>
          </div>
        </section>
        <section className="mx-auto container flex flex-col gap-10">
          <h1
            className="font-pop-sem-bol mt-16 md:mt-36 lg:mt-44 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-heading-color tracking-normal font-bold text-gray-900 dark:text-white">
            What I Do?
          </h1>

          <div
            className="flex flex-col md:flex-row gap-16 text-center mb-10"
          >
            <div className="pb-10">
              <h1 className="font-pop-sem-bol text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue dark:text-white text-center md:text-left lg:text-left">
                Front-End Development
              </h1>
              <div className="text-left px-8 py-4">
                <div className="flex flex-row gap-8 justify-center mt-5 mb-5">
                  <div className="flex flex-col w-20 text-center">
                    <svg viewBox="0 0 128 128">
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4"></circle>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col w-20 text-center">
                    <svg viewBox="0 0 128 128">
                      <path
                        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                        fill="#38b2ac"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col w-20 text-center">
                    <svg viewBox="0 0 128 128">
                      <defs>
                        <linearGradient
                          id="bootstrap-original-a"
                          x1="76.079"
                          x2="523.48"
                          y1="10.798"
                          y2="365.95"
                          gradientTransform="translate(1.11 14.613) scale(.24566)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#9013fe" offset="0"></stop>
                          <stop stop-color="#6610f2" offset="1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="bootstrap-original-b"
                          x1="193.51"
                          x2="293.51"
                          y1="109.74"
                          y2="278.87"
                          gradientTransform="translate(0 52)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" offset="0"></stop>
                          <stop stop-color="#f1e5fc" offset="1"></stop>
                        </linearGradient>
                        <filter
                          id="bootstrap-original-c"
                          x="161.9"
                          y="135.46"
                          width="197"
                          height="249"
                          color-interpolation-filters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="4"></feOffset>
                          <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                      <path
                        d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                        fill="url(#bootstrap-original-a)"
                      ></path>
                      <path
                        transform="translate(1.494 2.203) scale(.24566)"
                        d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                        fill="url(#bootstrap-original-b)"
                        filter="url(#bootstrap-original-c)"
                        stroke="#fff"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col w-20 text-center">
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#1FA6CA"
                        d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
                      ></path>
                      <path
                        fill="#1C7FB6"
                        d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
                      ></path>
                      <path
                        fill="#1FA6CA"
                        d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"
                      ></path>
                      <path
                        fill="#1C7FB6"
                        d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <ul className="list-none lg:text-2xl md:text-xl sm:text-lg dark:text-gray-400">
                  <li>⚡Building responsive website front end using React</li>
                  <li>
                    ⚡Designing UI using Tailwind CSS, Bootstrap, and Material
                    UI
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-10">
              <img src={Programming} alt="hero" width={600} />
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-16 text-center mb-10"
          >
            <div className="pb-10">
              <h1 className="font-pop-sem-bol text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue dark:text-white text-center md:text-left lg:text-left">
                Mobile App Development
              </h1>
              <div className="text-left px-8 py-4">
                <div className="flex flex-row gap-8 justify-center mt-5 mb-5">
                  <div className="rounded-full w-24 h-24">
                    <svg viewBox="0 0 128 128">
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4"></circle>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="rounded-full w-24 h-24">
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#f58220"
                        d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                      ></path>
                    </svg>
                  </div>
                  <img src={Aws} alt="aws" className="rounded-full w-24 h-24" />
                </div>
                <ul className="list-none lg:text-2xl md:text-xl sm:text-lg dark:text-gray-400">
                  <li>
                    ⚡Developing and Designing Hybrid mobile app using React
                    Native
                  </li>
                  <li>⚡Using AWS and Firebase for backend data</li>
                </ul>
              </div>
            </div>
            <div className="pb-10">
              <img src={AppDev} alt="hero" width={600} />
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-16 text-center mb-10"
          >
            <div className="pb-10">
              <h1 className="font-pop-sem-bol text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue dark:text-white text-center md:text-left lg:text-left">
                Technical Writing
              </h1>
              <div className="text-left px-8 py-4">
                <div className="flex flex-row gap-8 justify-center mt-5 mb-5">
                  <img src={GFG} alt="gfg" className="rounded-full w-24 h-24" />
                  <img src={CM} alt="cm" className="rounded-full w-24 h-24" />
                </div>
                <ul className="list-none lg:text-2xl md:text-xl sm:text-lg dark:text-gray-400">
                  <li>
                    ⚡Writing technical articles is my hobby and have published more
                    than 400+ articles/blogs
                  </li>
                  <li>⚡Interned at GeeksforGeeks and Coding Minutes as TCW</li>
                  <li>⚡Worked for Codecademy, Semaphore, GeeksforGeeks, and Tutorialspoint</li>
                </ul>
              </div>
            </div>
            <div className="pb-10">
              <img src={Writer} alt="hero" width={600} />
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-16 text-center mb-10"
          >
            <div className="pb-10">
              <h1 className="font-pop-sem-bol text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue dark:text-white text-center md:text-left lg:text-left">
                YouTube Content Creator
              </h1>
              <div className="text-left px-8 py-4">
                <div className="flex justify-center mt-5 mb-5">
                  <img src={YoutubeLogo} alt="gfg" className="w-32 h-32" />
                </div>
                <ul className="list-none lg:text-2xl md:text-xl sm:text-lg dark:text-gray-400">
                  <li>
                    ⚡I create videos related to Educational, Coding, Internships, Jobs, and on other topics with detailed information.
                  </li>
                  <li>⚡Have over <a href="https://www.youtube.com/@TarunSingh24" className="font-medium underline text-red-500">1.32K</a> Subscribers family</li>
                </ul>
              </div>
            </div>
            <div className="pb-10">
              <img src={Youtube} alt="hero" width={400} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
