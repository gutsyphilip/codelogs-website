import { CardProps } from "./card.type"
import React from "react"
import cx from "classnames"
import styles from "./cards.module.scss"

interface FeaturedCardProps extends CardProps {
  className: string
  data: {
    date: string
    label: string
    title: string
    image: string
  }
  hasPadding: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  className,
  data: { date, label, title, image },
  hasPadding,
  variant,
}) => {
  console.log(variant)
  return (
    <section
      className={cx(styles.card, className, styles.featuredCard, {
        [styles[`card_${variant}`]]: variant,
        [styles.card_hasPadding]: hasPadding,
      })}
    >
      <div>
        <h6 className={styles.featuredCard_label}>{label}</h6>
        <h2 className={styles.featuredCard_title}>{title}</h2>
        <p className={styles.featuredCard_date}>{date}</p>
      </div>

      <div className={styles.featuredCard_speaker}>
        <img className={styles.featuredCard_speaker_image} src={image} alt="" />
        <div className={styles.featuredCard_speaker_details}>
          <h4 className={styles.featuredCard_speaker_details_title}>
            Philip Obosi
          </h4>
          <h6 className={styles.featuredCard_speaker_details_position}>
            Snr. Software Engineer
          </h6>
          <p className={styles.featuredCard_speaker_details_company}>
            Kudi Inc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCard
