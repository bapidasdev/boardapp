import React from 'react'

const Button = (bgColor, color, size, text, borderRadius) => {
  return (
    <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`} >
        {text}
     
        {/* <button style={{backgroundColor:"blue", color:"white", borderRadius:"10px", padding:"8px"}}> Bapi</button> */}
        
    </button>
  )
}

export default Button
