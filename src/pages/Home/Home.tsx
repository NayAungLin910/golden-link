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
      imgUrl: "./images/golden_link_asean.webp",
      title: "Golden Link and Subaru Conference",
      description: "Amazing Conference",
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
