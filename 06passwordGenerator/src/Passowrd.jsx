import React, { useState, useCallback, useEffect } from 'react'

export default function Password() {
  // State for password generation
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [copied, setCopied] = useState(false)

  // Password generation function
  const generatePassword = useCallback(() => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let validChars = ''
    if (includeUppercase) validChars += uppercaseChars
    if (includeLowercase) validChars += lowercaseChars
    if (includeNumbers) validChars += numberChars
    if (includeSymbols) validChars += symbolChars

    if (validChars === '') {
      setPassword('Select at least one character type')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[randomIndex]
    }

    setPassword(generatedPassword)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  // Copy to clipboard function
  const copyToClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
        .catch(err => console.error('Failed to copy:', err))
    }
  }, [password])

  // Regenerate password on settings change
  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Password Generator
      </h1>

      {/* Password Display */}
      <div className="flex mb-6">
        <input 
          type="text" 
          value={password} 
          readOnly 
          className="flex-grow p-3 border-2 border-gray-300 rounded-l-lg text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Generated Password"
        />
        <button 
          onClick={copyToClipboard}
          className={`px-4 py-2 ${copied ? 'bg-green-500' : 'bg-blue-500'} text-blue-700 rounded-r-lg hover:bg-blue-600 transition duration-300`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Length Slider */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Password Length: {length}
        </label>
        <input 
          type="range" 
          min="6" 
          max="24" 
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Character Type Checkboxes */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            className="mr-2"
          />
          <label htmlFor="uppercase">Uppercase Letters</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            className="mr-2"
          />
          <label htmlFor="lowercase">Lowercase Letters</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="symbols"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
            className="mr-2"
          />
          <label htmlFor="symbols">Symbols</label>
        </div>
      </div>

      {/* Regenerate Button */}
      <button 
        onClick={generatePassword}
        className="w-full bg-blue-600 text-blue-700 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Generate New Password
      </button>
    </div>
  )
}