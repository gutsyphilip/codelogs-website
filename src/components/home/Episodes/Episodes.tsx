import React from 'react'
import styles from './episodes.module.scss'
import { SearchInput } from '../../utility/input'

const Episodes: React.FC = () => (
  <section className={styles.episodes}>
      <h6 className={styles.episodes_label}>Episodes</h6>
      <h2 className={styles.episodes_title}>
        Watch videos from past episodes.
      </h2>
      <SearchInput text="Search videos by titles" />

      <div className={styles.episodes_listing}>

      </div>
  </section>
)

export default Episodes
