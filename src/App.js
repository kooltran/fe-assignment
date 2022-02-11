import logo from './logo.svg'
import './styles.scss'

import { Button, TextBox, Slider, Nav } from './components'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Button>Normal</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <TextBox placeHolder="keyword" />
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
      /> */}
    </div>
  )
}

export default App
