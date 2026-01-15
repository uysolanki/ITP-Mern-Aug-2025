import React from 'react'
import './MyButton.css'
// const MyButton = (props) => {
const MyButton = ({handleClick,text}) => {
  return (
    <>
    {/* <button onClick={props.handleClick}>{props.text}</button> */}
    <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default MyButton