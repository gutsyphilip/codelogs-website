import AvatarImage from '../../assets/images/avatar.jpg'
import { Button } from '../utility/button'
import { FeaturedCard } from '../utility/cards'
import React from 'react'
import { cardVariantTypes } from '../utility/cards/card.type'
import styles from './home.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_caption}>
        <h2 className={styles.hero_caption_title}>Welcome to Codelogs!</h2>
        <p className={styles.hero_caption_description}>
          Quality streams on advanced software engineering concepts taught by
          experienced professionals.
        </p>
        <Button className={styles.hero_caption_button} variant="themed">
          Watch videos
        </Button>
      </div>

      <div>
        <FeaturedCard
          className={styles.hero_upNext}
          data={{
            date: 'Saturday, May 2 2020 - 18:00 WAT',
            label: 'COMING SOON',
            title: 'Defining your Testing Strategy using the Testing Pyramid.',
            image: AvatarImage
          }}
          hasPadding
          variant={cardVariantTypes.light}
        />
      </div>
    </section>
  )
}

export default Hero
