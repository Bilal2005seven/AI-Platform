import React , {useState} from 'react'
import { Eraser, FileText, Sparkles } from 'lucide-react';

function ReviewResume() {
   const [input, setInput] = useState('');
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
    }
  return (
     <div>
      <div className='p-6 flex flex-row gap-4 text-slate-400'>
        {/* Left Column */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-l g p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-fit'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-5 text-[#d7d1eb]' />
            <h1 className='text-lg font-semibold text-black'>Resume Analyser</h1>
          </div>
          <p className='text-sm font-medium mt-6'>Upload Resume</p>
          <input
            onChange={(e) => setInput(e.target.files[0])}
            accept='application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*'
            type="file"
            className='border border-gray-300 rounded-md p-2 w-full text-sm text-gray-600'
            required
          />

          <p className='text-sm font-medium mt-6 text-black'>Supports JPG , PNG , PDF and other images formats 👍👍</p>
          <button
            type="submit"
            className='mt-6 w-full px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#8be383] to-[#1a2523] shadow-sm hover:shadow-md transition flex justify-center items-center gap-2 cursor-pointer'
          >
            <FileText className='w-5' /> Review Resume
          </button>
        </form>

        {/* Right Column */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-[300px] max-h-[600px] overflow-y-auto'>
          <div className='flex items-center gap-3'>
            <Eraser className='w-5 h-5 text-[#d6b926]' />
            <h1 className='text-lg font-semibold text-black'>Processed Resume</h1>
          </div>
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
            <Eraser className="w-9 h-9" />
            <p>Upload a resume and click "Review Resume" to get started 📁📁</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume
