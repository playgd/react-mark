import React from 'react'
import { lower } from './utils'

const Highlight = ({ children, toHighlight }) => {
  const regex = new RegExp(`(${toHighlight})`, 'i')
  return children.split(regex).map((chunk, index) => {
    if (lower(chunk) === lower(toHighlight)) {
      return <mark key={index}>{chunk}</mark>
    }
    return chunk
  })
}

export default Highlight
