import React, { useId } from "react";

function InputBox({
  label,
  amount,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
  amountDisabled,
  currencyDisabled,
  className = "",
  currencyOptions = [],
}) {
  const amountInputId = useId();

  return (
    <div 
      className={`bg-white p-4 rounded-xl shadow-md flex justify-between items-end ${className}`}>

      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-400 mb-2 block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && 
          onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 text-right">
        <p className="text-gray-400 mb-2">Currency Type</p>
        <select
          className="w-full bg-gray-100 px-3 py-2 rounded-md outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
