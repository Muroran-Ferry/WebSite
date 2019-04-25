import React from 'react'

class Footer extends React.Component {
  render() {
    const { author } = this.props
    return (
      <footer>
        <p className="text-center">(c) 2018-2019 {author}.</p>
      </footer>
    )
  }
}

export default Footer
