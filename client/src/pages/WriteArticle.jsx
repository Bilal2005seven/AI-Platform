import React, { useState } from 'react'
import { Edit, Sparkle } from 'lucide-react'

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short (500–800 words)" },
    { length: 1200, text: "Medium (800–1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='p-6 flex flex-row gap-4 text-slate-400'>
      {/* Left Column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-fit'>
        <div className='flex items-center gap-3'>
          <Sparkle className='w-5 text-[#6C47FF]' />
          <h1 className='text-lg font-semibold text-black'>Article Configurations</h1>
        </div>
        <p className='text-sm font-medium mt-6'>Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className='border border-gray-300 rounded-md p-2 w-full text-sm'
          placeholder='The future of Artificial Intelligence is ...'
        />
        <p className='text-sm font-medium mt-6 text-black'>Article Length</p>
        <div className='mt-3 flex gap-3 flex-wrap'>
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? 'bg-[#6C47FF] text-white'
                  : 'text-gray-500 border-gray-300'
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>
        <button
          type="submit"
          className='cursor-pointer mt-6 w-full px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#6C47FF] to-[#B07EFF] shadow-sm hover:shadow-md transition flex justify-center items-center gap-2'
        >
          <Edit className='w-5' /> Generate Article
        </button>
      </form>

      {/* Right Column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-[300px]'>
        <div className='flex items-center gap-3'>
          <Edit className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='text-lg font-semibold text-black'>Generated Article</h1>
        </div>
        <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
          <Edit className="w-9 h-9" />
          <p>Enter a topic and click “Generate article” to get started</p>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle