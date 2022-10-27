import React from 'react'
import Navmenu  from './Navmenu'
import Footer from './Footer'

function RandomTweet(props) {
  console.log(props.tweets)
  return (
    <div>
      <Navmenu/>
      <h1>This is random tweet page.</h1>
      <Footer/>
    </div>
  )
}

export default RandomTweet



