import React from 'react'

React

function TechItem({tech,onDelete}){
  return(
    <li >{tech} <button  onClick={onDelete} type='button'>Remover</button></li>)
  
}
export default TechItem