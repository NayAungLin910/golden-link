import { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((preIndex) => {
        if (preIndex === slides.length - 1) {
          return 0;
        } else {
          return preIndex + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, currentIndex]);

  return (
    <>
      <div className={imageSliderStyles.img_slider_wrapper}>
        <div className={imageSliderStyles.img_slider}>
          {slides?.map((slide, index) => (
            <div
              className={`${imageSliderStyles.slide} ${
                currentIndex === index ? imageSliderStyles.active : ""
              }`}
              key={index}
            >
              <img src={slide.imgUrl} alt="" />
              <div
                key={`image-slider-info-${index}`}
                className={imageSliderStyles?.info}
              >
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className={imageSliderStyles.navigation}>
                {slides?.map((slide, index) => (
                  <div
                    className={`${imageSliderStyles.btn} ${
                      currentIndex === index
                        ? imageSliderStyles.active_nav_btn
                        : ""
                    }`}
                    key={`navigation-button-${index}`}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
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
