import { FC, useState } from "react";
import imageSliderStyles from "./ImageSlider.module.css";

export interface SlideInterface {
  imgUrl: string;
  title: string;
  description: string;
}

export interface ImageSliderProps {
  slides: SlideInterface[];
}

const ImageSlider: FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <>
      <div className={imageSliderStyles.img_slider_wrapper}>
        <div className={imageSliderStyles.img_slider}>
          {slides?.map((slide, index) => (
            <div className={imageSliderStyles.slide} key={index}>
              <img
                className={`${
                  currentIndex === index ? imageSliderStyles.active : ""
                }`}
                src={slide.imgUrl}
                alt=""
              />
              <div className={imageSliderStyles?.info}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className={imageSliderStyles.navigation}>
                {slides?.map((slide, index) => (
                  <div
                    className={`${imageSliderStyles.btn} ${
                      currentIndex === index ? imageSliderStyles.active : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
