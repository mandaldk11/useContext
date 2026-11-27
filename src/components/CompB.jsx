import React from 'react'
import CompC from './CompC.jsx'

function CompB({data}) {
  return (
    <div>
      <h1>Comp-B</h1>
      <CompC data={data}/>
    </div>
  )
}

export default CompB
