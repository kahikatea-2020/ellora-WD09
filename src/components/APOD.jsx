import React from 'react'
// import axios from 'axios'
const axios = require('axios')

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=T5DbcD9snuO5dPRXb1gonh993B6SjWrzf6GIqnqJ'
// const apiKey = 'T5DbcD9snuO5dPRXb1gonh993B6SjWrzf6GIqnqJ'

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
    axios.get(apiUrl)
    // .query({ api_key: apiKey })
    .then((res) => {
      // console.log(res)
      const { title, explanation, hdurl } = res.data
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
        <div id='title'><span style={textStyle}>Title:</span> {this.state.title} </div>
        <img src={this.state.hdurl} alt={`${this.state.title}`}/>
        <div id='description'><span style={textStyle}>Description:</span> {this.state.explanation} </div>
      </>
    )
  }
}

export default APOD
