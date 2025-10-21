// src/components/Community.jsx

import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      setCreations(dummyPublishedCreationData)
    }
  }, [user])

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h2 className="text-xl font-semibold text-gray-800">Creations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="relative group block w-full rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={creation.content}
              alt="creation"
              className="w-full h-64 object-cover"
            />

            <div className="absolute bottom-0 top-0 right-0 left-0 flex justify-end group-hover:justify-between p-3 bg-gradient-to-b from-transparent to-black/80 text-white">
              <p className="text-sm hidden group-hover:block">{creation.prompt}</p>
              <div className="flex gap-1 items-center">
                <p>{creation.likes.length}</p>
                <Heart
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user?.id) ? 'fill-red-500' : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community