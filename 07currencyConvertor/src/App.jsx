import './App.css';
import { useState } from 'react';
import UseCurrency from './Hooks/UseCurrency.js';
import InputBox from './components/InputBox.jsx';

function App() {
  const { data, loading, error } = UseCurrency("USD");

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convert = () => {
    if (!data) return;
    const rate = data[to];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  if (loading) return <div className="text-center text-lg mt-10">Loading exchange rates...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  if (!data) return <div className="text-center mt-10">No exchange rate data.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-800 to-blue-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Currency <br /> Converter
        </h1>

        <InputBox
          label="From"
          amount={amount}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          currencyOptions={Object.keys(data)}
          onAmountChange={(amt) => setAmount(amt)}
          className="mb-6"
        />

        <div className="flex justify-center mb-6">
          <button
            onClick={swap}
            className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg shadow-md font-medium"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          currencyOptions={Object.keys(data)}
          amountDisabled
          className="mb-6"
        />

        <button
          onClick={convert}
          className="w-full bg-blue-100 text-blue-600 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-200 transition"
        >
          Convert {from} to {to}
        </button>
      </div>
    </div>
  );
}

export default App;
