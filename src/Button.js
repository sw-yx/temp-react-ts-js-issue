import React from 'react'

export default function Button({ color }) {
  const onClick = () => {
    document.title = 'hello' // just testing that 'dom' lib is included
  }
  return (
    <button
      style={{
        backgroundColor: color || 'lightgreen', // color is actually optional, but TS doesn't know
      }}
      onClick={onClick}
    >
      Click Me
    </button>
  )
}
