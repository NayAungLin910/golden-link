import { FC, useState } from "react";
import styles from "./ServiceCard.module.css";
import common from "../../styles/common.module.css"

export interface ServiceCardInterface {
  imgUrl: string;
  imgAlt: string;
  description: string;
  title: string;
}

export interface ServiceCardProps {
  serviceCards: ServiceCardInterface[];
}

const ServiceCard: FC<ServiceCardProps> = ({ serviceCards }) => {
  const [cards, setCards] = useState<ServiceCardInterface[]>(serviceCards);

  return (
    <>
      <div className={styles.container}>
        <hr className={styles.line_break} />
        <h3 className={styles.main_title}>Our Services</h3>
        <div className={styles.card_container}>
          {cards?.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className={styles.card_article}
            >
              <img
                src={card.imgUrl}
                alt={card.imgAlt}
                className={styles.card_img}
              />
              <div className={styles.card_data}>
                <h2 className={styles.card_title}>{card.title}</h2>
                <span className={styles.card_description}>
                  {card.description}
                </span>
                <a href="" className={common.button_gold}>
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
