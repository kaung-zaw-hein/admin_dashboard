import React from 'react'

const ChartsHeader = ({ category, title }) => {
  return (
    <div className="mb-10 ">
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{category}</p>
      </div>
      <p className="mt-3 mb-2 text-xl text-center dark:text-gray-200">{title}</p>
    </div>
  )
}

export default ChartsHeader