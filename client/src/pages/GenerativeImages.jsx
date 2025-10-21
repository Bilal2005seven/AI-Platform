import { Hash, Sparkles, Image } from 'lucide-react';
import React, { useState } from 'react'

const GenerativeImages = () => {

  const imageStyle = ['Realistic', 'Ghibli style', 'Anime style', 'Cartoon style',
    'Fantasy style', 'Realistic style', '3D style', 'Portrait style']

  const [selectedStyle, setSelectedStyle] = useState('Realistic')
  const [input, setInput] = useState('')
  const [publish, setPublish] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }



  return (
    <div>
      <div className='p-6 flex flex-row gap-4 text-slate-400'>
        {/* Left Column */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-fit'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-5 text-[#d7d1eb]' />
            <h1 className='text-lg font-semibold text-black'>AI Image Generator</h1>
          </div>
          <p className='text-sm font-medium mt-6'>Describe Your Image</p>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className='border border-gray-300 rounded-md p-2 w-full text-sm'
            placeholder='Describe What you want to see in the Image 😊😊 ...'
            rows={4}
          />
          <p className='text-sm font-medium mt-6 text-black'>Style</p>
          <div className='mt-3 flex gap-3 flex-wrap'>
            {imageStyle.map((item, index) => (
              <span
                onClick={() => setSelectedStyle(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item
                  ? 'bg-[#867ea5] text-white'
                  : 'text-green-500 border-green-300'
                  }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="my-6 flex items-center gap-2">
            <label className="relative inline-block w-9 h-5 cursor-pointer">
              <input
                type="checkbox"
                onChange={(e) => setPublish(e.target.checked)}
                checked={publish}
                className="sr-only peer"
              />
              <div className="w-full h-full bg-slate-300 rounded-full peer-checked:bg-green-500 transition-colors"></div>
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
            </label>
            <span className="text-sm text-gray-700">Make This Image Public</span>
          </div>
          <button
            type="submit"
            className='cursor-pointer mt-6 w-full px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#282532] to-[#a285d0] shadow-sm hover:shadow-md transition flex justify-center items-center gap-2'
          >
            <Image className='w-5' /> Generate Image
          </button>
        </form>

        {/* Right Column */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-[300px]'>
          <div className='flex items-center gap-3'>
            <Image className='w-5 h-5 text-[#4A7AFF]' />
            <h1 className='text-lg font-semibold text-black'>Generated Image</h1>
          </div>
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
            <Image className="w-9 h-9" />
            <p>Enter a topic and click “Generate image” to get started 📸🖼️</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerativeImages


