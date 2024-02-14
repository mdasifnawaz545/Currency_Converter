import React,{useId} from 'react'

function InputBox({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "sar",
    amountDisabled = false,
    currencyDisabled = false,
    className = "" }) {
        const id=useId();
    return (
        <div className={`p-3 bg-slate-50 rounded-lg text-md flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                    id={id}
                    type="number"
                    className='w-full outline-none bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(event) =>  (onAmountChange && onAmountChange(Number(event.target.value)))}
                />
                
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none w-1/2' value={selectedCurrency}
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                    disabled={currencyDisabled}
                >

                    {currencyOptions.map((curr) => (<option key={curr} value={curr}>{curr}</option>))}


                </select>
            </div>



        </div>
    )
}

export default InputBox