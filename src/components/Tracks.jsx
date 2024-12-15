import React, { useState } from 'react'
import styled from 'styled-components'

function Tracks() {
    const Box=styled.div`
    
    height:100px;
    background-color:#343a40 !important;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    `
    const [coded,setCoded]=useState(10000)

    setInterval(()=>{setCoded(coded+3)},24*60*60*1000)
  return (
    <>
        <Box id='Tracks'>
            <h1>Hours Coded:{coded}</h1>
            
        </Box>
    </>
  )
}

export default Tracks