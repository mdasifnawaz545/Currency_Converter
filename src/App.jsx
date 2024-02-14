import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('sar');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  
  }
  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      <div className='w-full'>

        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(curr) => setFrom(curr)}
                currencyOptions={options}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                className='exchange absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-1 border-white rounded-md bg-blue-500 text-white px-2 py-0.5'
                onClick={swap}
              >Exchange</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="To"
                amount={convertedAmount}
                amountDisabled
                onCurrencyChange={(curr) => setTo(curr)}
                currencyOptions={options}
                selectedCurrency={to}
              />
            </div>
            <div className='mb-3'></div>
            <div className='relative w-full mb-8'>
              <button
                className='convert absolute border-1 w-full p-1 rounded-md px-2 bg-green-700'
                type='submit'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>

        </div>

      </div>

    </div>

  )
}

export default App
