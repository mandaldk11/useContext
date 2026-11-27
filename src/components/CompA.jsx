import React from 'react'
import CompB from './CompB.jsx'

function CompA({data}) {
  return (
    <div>
      <h1>Comp-A</h1>
      <CompB data={data}/>
    </div>
  )
}

export default CompA
