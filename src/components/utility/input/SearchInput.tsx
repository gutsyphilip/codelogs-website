import React from 'react'
import { InputProps } from './input.type'
import style from './inputs.module.scss'

const SearchInput: React.FC<InputProps> = ({ text }) => (
  <input className={style.input} placeholder={text} />
)

export default SearchInput
