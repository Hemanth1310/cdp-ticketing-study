import React from 'react'
import './BorderButton.css'
export const BorderButton = (props) => {
    
  return (
    <div className='BlueText' onClick={props.onContinue}>{props.children}</div>
  )
}
