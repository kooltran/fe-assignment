import React, { useState, useEffect } from 'react'

import useSearch from '../Result/useSearch'

import { Button, TextBox, Slider, NotificationDialog } from '../../components'

import { useAppContext } from '../../AppContext'

import './Home.scss'

const sliderMarks = [
  { value: 0, label: '3' },
  { value: (100 / 5) * 1, label: '6' },
  { value: (100 / 5) * 2, label: '9' },
  { value: (100 / 5) * 3, label: '12' },
  { value: (100 / 5) * 4, label: '15' },
  { value: 100, label: '50' },
]

const getSearchItems = value => {
  return sliderMarks.find((mark, index) =>
    value ? mark.value === value : index === 0
  ).label
}

const Home = () => {
  const [searchItems, setSearchItems] = useState(parseInt(getSearchItems()))
  const [searchKey, setSearchKey] = useState('')
  const [showAlert, setShowAlert] = useState({})

  const getSearchResult = useSearch()

  const {
    data: { search: searchData },
  } = useAppContext()

  const handleSliderChange = (e, newValue) => {
    const currentVal = getSearchItems(newValue)
    setSearchItems(parseInt(currentVal))
  }

  const handleChangeSearchBox = ({ target: { value } }) => {
    setSearchKey(value)
  }

  const handleSubmitSearch = async () => {
    getSearchResult({
      page: 1,
      pageSize: searchItems,
      keyword: searchKey,
      isRedirect: true,
    })
  }

  useEffect(() => {
    if (searchData.fail) {
      setShowAlert({ type: 'error', message: searchData.fail })
    } else {
      setShowAlert({})
    }
  }, [searchData.fail])

  return (
    <div className="home">
      <div className="home-search">
        <div className="home-search__title">Search</div>
        <TextBox
          placeHolder="Keyword"
          onChange={handleChangeSearchBox}
          value={searchKey}
        />
        <div className="home-search__slider">
          <div className="title"># of result per page</div>
          <div className="status">
            <span>{searchItems}</span>
            results
          </div>
          <Slider
            marks={sliderMarks}
            step={null}
            handleChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="home-search__button">
        <Button
          disabled={!searchKey || searchData.loading}
          onClick={handleSubmitSearch}
        >
          SEARCH
        </Button>
      </div>

      {showAlert.type && (
        <NotificationDialog
          {...showAlert}
          handleCloseDialog={() => {
            setShowAlert({})
          }}
        />
      )}
    </div>
  )
}

export default Home
