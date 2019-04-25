import React from 'react'
import 'whatwg-fetch'

class GooglePlacePhoto extends React.Component {
  constructor() {
    super()
    this.setState({
      data: '',
    })
  }
  componentDidMount() {
    this.reconstructionData()
  }

  reconstructionData() {
    fetch(
      'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJQTae2Zvan18RnUZUSGhyqOQ&key=AIzaSyBINdFAznxv-kNG1wa1LdQVJ4LpqGp5CYE',
      {
        method: 'GET',
        mode: 'no-cors',
      }
    )
      .then(function(response) {
        console.log(response)
        return response
      })
      .then(function(data) {
        this.setState({ data: data })
      })
  }

  render() {
    return <div>a</div>
  }
}

export default GooglePlacePhoto
