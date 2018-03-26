import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    const { author } = this.props
    return (
      <footer>
        <p className="text-center">(c) 2018 {author}.</p>
      </footer>
    )
  }
}

export default Footer
