import React from 'react'

export const ShowTaskControl = ({setShowCompelted}) => {
  return (
    <div>
      <input type="checkbox" onChange={e => setShowCompelted(e.target.checked)} /> <label>Hidden/Show tasks completed</label>
    <button></button>
    </div>
  )
}
