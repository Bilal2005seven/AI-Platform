import React , {useState} from 'react'
import { Scissors, Sparkles } from 'lucide-react';

function RemoveObject() {

  const [input, setInput] = useState('');
  const [object, setObject] = useState('');
  
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
            <h1 className='text-lg font-semibold text-black'>Object Remover</h1>
          </div>
          <p className='text-sm font-medium mt-6'>Upload Image</p>
          <input
            onChange={(e) => setInput(e.target.files[0])}
            accept='image/*'
            type="file"
            className='border border-gray-300 rounded-md p-2 w-full text-sm text-gray-600 '
            required
          />
           
          <p className='text-sm font-medium mt-6'>Describe Object name to remove</p>
          <textarea
            onChange={(e) => setObject(e.target.value)}
            value={object}
            type="text"
            className='border border-gray-300 rounded-md p-2 w-full text-sm'
            placeholder='e.g car, person, tree ... , but only one object at a time 😊😊'
            rows={4}
          />

          <p className='text-sm font-medium mt-6 text-black'>Supports JPG , PNG and other images formats 👍👍</p>
          <button
            type="submit"
            className='cursor-pointer mt-6 w-full px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#894bf3] to-[#4ac117] shadow-sm hover:shadow-md transition flex justify-center items-center gap-2'
          >
            <Scissors className='w-5' /> Remove Object
          </button>
        </form>

        {/* Right Column */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-[300px]'>
          <div className='flex items-center gap-3'>
            <Scissors className='w-5 h-5 text-[#d6b926]' />
            <h1 className='text-lg font-semibold text-black'>Processed Image</h1>
          </div>
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and click Remove object to get sarted ✂️✂️</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject
