import React from 'react'

import { Button, TextBox, Slider, Nav } from '../../components'

import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home-search">
        <div className="home-search__title">Search</div>
        <TextBox placeHolder="Keyword" />
        <div className="home-search__slider">
          <div className="title"># of result per page</div>
          <Slider
            marks={[
              { value: 0, label: '3' },
              { value: (100 / 5) * 1, label: '6' },
              { value: (100 / 5) * 2, label: '9' },
              { value: (100 / 5) * 3, label: '12' },
              { value: (100 / 5) * 4, label: '15' },
              { value: 100, label: '50' },
            ]}
            step={null}
          />
        </div>
      </div>
      <div className="home-search__button">
        <Button>SEARCH</Button>
      </div>
    </div>
  )
}

export default Home
