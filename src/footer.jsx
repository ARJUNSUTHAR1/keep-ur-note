import React from 'react'
const date = new Date();
const year = date.getFullYear();
const footer = () => {
  return (
    <footer>
      copyright &copy; {year}
    </footer>
  )
}

export default footer
