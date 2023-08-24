import axios from 'axios';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './App.css';

function App() {
  const [result, setResult] = useState([])

  async function sendDataOnServer() {
    const data = await axios.get(' https://www.nbrb.by/API/ExRates/Currencies')
    console.log(data.data)
    setResult(data.data)
  }

  useEffect(() => {
    sendDataOnServer()
  }, [])

  return (
    <div className="App">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >

        {result.map((el) => {
          return <MenuItem>{el.Cur_Name}</MenuItem>
        })}
      </Select>
    </div>
  );
}

export default App;
