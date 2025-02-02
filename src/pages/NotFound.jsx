import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound