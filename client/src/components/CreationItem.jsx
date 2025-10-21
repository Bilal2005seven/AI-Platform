import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl bg-white border border-gray-200 rounded cursor-pointer transition hover:shadow-md"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="text-base font-medium text-gray-800">{item.prompt}</h2>
          <p className="text-sm text-gray-500">
            {item.type} – {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#6C47FF] to-[#B07EFF] shadow-sm hover:shadow-md transition">
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="mt-3">
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt="image"
              className="w-full max-w-md rounded-lg shadow-sm"
            />
          ) : (
            <div className="reset-tw">
              <Markdown>{item.content}</Markdown>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem