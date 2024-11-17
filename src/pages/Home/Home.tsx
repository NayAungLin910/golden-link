import { FC, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageSlider, {
  SlideInterface,
} from "../../components/ImageSlider/ImageSlider";
import ServiceCard, {
  ServiceCardInterface,
} from "../../components/ServiceCard/ServiceCard";

export interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [slides, setSlides] = useState<SlideInterface[]>([]);

  const homepageSlides: SlideInterface[] = [
    {
      imgUrl: "./images/1.jpg",
      title: "Visit from ASEAN Japanese Language School",
      description:
        "During a given time limit, students are tested of their japanese language abilities for an interview.",
    },
    {
      imgUrl: "./images/2.jpg",
      title: "Helping Youths Achieve Their Goals in Japan!",
      description:
        "There are already hundreds of students continuing their educational pursuit in Japan who applied through Golden Link.",
    },
    {
      imgUrl: "./images/4.jpg",
      title: "Helping Youths Achieve Their Goals in Japan!",
      description:
        "There are already hundreds of students continuing their educational pursuit in Japan who applied through Golden Link.",
    },
  ];

  const serviceCards: ServiceCardInterface[] = [
    {
      imgUrl: "/images/cards/5.jpg",
      imgAlt: "Landing Jobs",
      description:
        "The Golden Link is of one of many associates with the oversea employment agnecy, Glory Link and have already helped find jobs in Japan for many young people.",
      title: "Work in Japan!",
    },
    {
      imgUrl: "/images/cards/4.jpg",
      imgAlt: "Finding A Great Job",
      description: "This is an amazing",
      title: "Quite Something",
    },
    {
      imgUrl: "/images/cards/5.jpg",
      imgAlt: "Finding Job",
      description: "This kind of description",
      title: "Quite A Title",
    },
  ];

  useEffect(() => {
    setSlides(homepageSlides);
  }, []);

  return (
    <>
      <Navbar />
      <ImageSlider slides={slides} />
      <ServiceCard serviceCards={serviceCards} />
    </>
  );
};

export default Home;
