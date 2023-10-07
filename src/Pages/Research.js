import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";

const papers = [
  {
    title: "5G: The Stimulant to Digital Uprising in India",
    authors: ["Tarun Singh", "M. Dahiya"],
    publicationDate:
      "International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COM-IT-CON), 2022, pp. 726-730, 2022.",
    abstract:
      "The main objective of the paper is to discuss the role of 5G in Indian telecom sector and in other sectors too. It was expected that all 5G mobile technologies may be functional and operational by 2020. 5G comprises of advanced features and support advanced technologies, therefore its demand is much more awaited in the market, and it is the commanding technology in coming future which governs the telecom sector. This paper also discusses the key factors that can enable so that the rise in IoT devices and growth in supporting technologies can be seen. This paper also reviews the generations of mobile communication with their respective advantages and disadvantages. The paper also examines the impacts of 5G technologies on various sectors like industries, commerce, education, healthcare, agriculture, finance and social sectors.",
    link: "https://www.researchgate.net/publication/362706049_5G_The_Stimulant_to_Digital_Uprising_in_India",
  },
  {
    title: "An Analysis on Recommendation Systems in Machine Learning",
    authors: ["Tarun Singh", "Anees Ahmed Choudhary", "Akash"],
    publicationDate:
      "International Research Journal of Engineering and Technology (IRJET), 2021.",
    abstract:
      "With the increase in growth of the digital world and the influx of huge amount of information availability, a method to find the right choice in selecting and filtering an item to choose the right product from the pool of information has become necessary. To solve this problem, recommendations systems have been developed which can help the users in getting recommendations utilizing their previous searches and purchases. Recommendation systems are used in many areas which include and not limited to online shopping, news media, music, movie recommendation. They are highly deployed and utilized in companies like Amazon, Netflix, and YouTube.",
    link: "https://www.researchgate.net/publication/354527303_An_Analysis_on_Recommendation_Systems_in_Machine_Learning?_sg%5B0%5D=NDVW3CpDKC3KO5XXhaJRHFwPw0yNAiBMnyTYlJ5rpJvMrqG06ifRocjl2ukNvZ7oOMj-i4-_LkuKoS4y1jpRfTtWd2gNDld_u9kYHoGP.HMqWPWG9WcTQfARNYz5_O9IqU7MaS1Z27GGjNiHjU-ZGB8MIqwuJolDYHhDElggtA8fc-1Ll8MyvC0_L7JiZpw",
  },
  // more paper objects here
];

function Research() {
  const Paper = ({
    title,
    authors,
    publicationDate: publication,
    abstract,
    link,
  }) => {
    const [currentViews, setViews] = useState(0);

    useEffect(() => {
      const storedViews = localStorage.getItem(link);
      if (storedViews) {
        setViews(parseInt(storedViews));
      }
    }, [link]);

    const handleView = () => {
      const newViews = currentViews + 1;
      setViews(newViews);
      localStorage.setItem(link, newViews.toString());
    };

    return (
      <div className="mb-8 w-full h-full border border-gray-800 rounded-lg p-4 dark:bg-[#111111]">
        <a
          href={link}
          onClick={handleView}
          className="text-lg font-bold text-gray-900  dark:text-white hover:underline"
        >
          {title}
        </a>
        <span className="ml-2 text-sm text-blue">{currentViews} views</span>
        <div className="mt-1 text-sm text-gray-500">{authors.join(", ")}</div>
        <div className="mt-1 text-sm text-gray-500 italic font-medium">
          {publication}
        </div>
        <div className="mt-2 text-sm text-gray-500">{abstract}</div>
        <div className="mt-4 flex items-center justify-center md:justify-start lg:justify-start">
          <a
            href={link}
            className="inline-flex items-center px-4 hover:bg-gray-100 hover:cursor-pointer py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Download
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Research | Tarun Singh</title>
      </Helmet>
      <div className="bg-white dark:bg-black ">
        <div className="flex items-center justify-center">
          <h1
            data-aos="fade-right"
            className="text-3xl lg:text-6xl md:text-4xl font-bold text-blue"
          >
            Research Publications
          </h1>
        </div>

        <div
          className="flex items-center justify-center mx-auto w-11/12"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <div className="py-8 px-0">
            {papers.map((paper) => (
              <Paper key={paper.title} {...paper} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
