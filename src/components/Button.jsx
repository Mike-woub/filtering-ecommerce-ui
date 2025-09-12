import React from 'react'

function Button({onClickHandler, value, title}) {
  return (
    <button onClick={onClickHandler} value={value} className="bg-blue-950 md:pl-5 md:pr-5 md:pt-2.5 md:pb-2.5 md:rounded-xl md:text-xl pb-1 pt-1 pr-2 pl-2 rounded-lg text-xs text-white cursor-pointer hover:text-amber-300 font-bold">{title}</button>
  )
}

export default Button