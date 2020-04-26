import React from 'react'
import request from 'superagent'

const apiUrl = 'https://api.nasa.gov/planetary/apod'
const apiKey = 'T5DbcD9snuO5dPRXb1gonh993B6SjWrzf6GIqnqJ'

const textStyle = {
  fontWeight: 'bold'
}

class APOD extends React.Component {
  state = {
    title: '',
    explanation: '',
    hdurl: ''
  }

  componentDidMount = () => {
    request.get(apiUrl)
    .query({ api_key: apiKey })
    .then(res => {
      const { title, explanation, hdurl } = res.body
      this.setState({
        title,
        explanation,
        hdurl
      })
    })
  }

  render () {
    return (
      <>
        <h2>Astronomy pic of the day</h2>
        <div id='title'><span style={textStyle}>Title:</span> {this.state.title} </div>
        <img src={this.state.hdurl} />
        <div id='description'><span style={textStyle}>Description:</span> {this.state.explanation} </div>
      </>
    )
  }
}

export default APOD
