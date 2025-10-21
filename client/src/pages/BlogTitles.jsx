import { Hash, Sparkles } from 'lucide-react';
import React , {useState} from 'react'

const BlogTitles = () => {

  const blogCategories = [
    'General', 'Technology', 'Business', 'Health',
    'Lifestyle', 'Education', 'Travel', 'Food'
  ];

  const [selectedCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');

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
            <h1 className='text-lg font-semibold text-black'>AI Title Generator</h1>
          </div>
          <p className='text-sm font-medium mt-6'>Keyword</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className='border border-gray-300 rounded-md p-2 w-full text-sm'
            placeholder='The future of Artificial Intelligence is ...'
          />
          <p className='text-sm font-medium mt-6 text-black'>Categoty</p>
          <div className='mt-3 flex gap-3 flex-wrap'>
            {blogCategories.map((item, index) => (
              <span
                onClick={() => setSelectedCategory(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedCategory === item
                  ? 'bg-[#6C47FF] text-white'
                  : 'text-gray-500 border-gray-300'
                  }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <button
            type="submit"
            className='cursor-pointer mt-6 w-full px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#6C47FF] to-[#B07EFF] shadow-sm hover:shadow-md transition flex justify-center items-center gap-2'
          >
            <Hash className='w-5' /> Generate Title
          </button>
        </form>

        {/* Right Column */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-[300px]'>
          <div className='flex items-center gap-3'>
            <Hash className='w-5 h-5 text-[#4A7AFF]' />
            <h1 className='text-lg font-semibold text-black'>Generated Title</h1>
          </div>
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click “Generate title” to get started 🤖🤖</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles


