import React from 'react'
import './MyButton.css'
const MyButton = (props) => {
//const MyButton = ({handleClick,text,children}) => {
  return (
    <>
    <button onClick={props.handleClick}>{props.children}</button>  
    {/* <button onClick={handleClick}>{children}</button> */}
    </>
  )
}

export default MyButton