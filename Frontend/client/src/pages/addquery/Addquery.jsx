import React from 'react'
import Queries from '../../components/queries/Queries'
import Queryadd from '../../components/queryadd/Queryadd'
import RightBar from '../../components/rightBar/RightBar'
import './Addquery.scss'

function Addquery() {
  return (
    
    <div className='queryadd'>
      <div>\n</div>
      <div className='space'>\n</div>
      <Queryadd/>
      <Queries/>
      
    </div>
  )
}

export default Addquery
