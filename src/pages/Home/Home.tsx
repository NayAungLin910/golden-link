import { FC, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageSlider, {
  SlideInterface,
} from "../../components/ImageSlider/ImageSlider";

export interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [slides, setSlides] = useState<SlideInterface[]>([]);

  const homepageSlides: SlideInterface[] = [
    {
      imgUrl: "./images/1.jpg",
      title: "Visit from ASEAN Japanese Language School",
      description: "During a given time limit, students are tested of their japanese language abilities for an interview.",
    },
    {
      imgUrl: "./images/2.jpg",
      title: "Helping Youths Achieve Their Goals in Japan!",
      description: "There are already hundreds of students continuing their educational pursuit in Japan who applied through Golden Link."
    },
    {
      imgUrl: "./images/4.jpg",
      title: "Helping Youths Achieve Their Goals in Japan!",
      description: "There are already hundreds of students continuing their educational pursuit in Japan who applied through Golden Link."
    },
  ];

  useEffect(() => {
    setSlides(homepageSlides);
  }, []);

  return (
    <>
      <Navbar />
      <ImageSlider slides={slides} />
    </>
  );
};

export default Home;
