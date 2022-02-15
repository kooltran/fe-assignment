import React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/system'

const CustomSlider = styled(Slider)(() => ({
  '& .MuiSlider-rail': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  '& .MuiSlider-track': {
    height: 6,
    backgroundImage: 'linear-gradient(90deg, #FF5C01, #FFD25F)',
    border: 0,
  },
  '& .MuiSlider-thumb': {
    backgroundColor: '#1B1B1B',
    border: '4px solid #FFD05D',
    '&:hover': {
      boxShadow: 'none',
    },
    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-markLabel': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  '& .MuiSlider-markLabelActive': {
    color: '#fff',
  },
  '& .Mui-focusVisible': {
    boxShadow: 'none',
  },
}))

const VolumnSlider = ({ marks, step, defaultValue, handleChange }) => {
  return (
    <CustomSlider
      aria-label="Custom marks"
      defaultValue={defaultValue}
      step={step}
      marks={marks}
      onChange={handleChange}
    />
  )
}

export default VolumnSlider
