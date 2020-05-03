import React from 'react'
import cx from 'classnames'
import styles from './button.module.scss'

type ButtonProps = {
  className?: string
  variant: string
}

const Button: React.FC<ButtonProps> = ({ className, children, variant }) => {
  return (
    <button
      className={cx(styles.button, className, {
        [styles[`button_${variant}`]]: variant
      })}
    >
      {children}
    </button>
  )
}

export default Button
