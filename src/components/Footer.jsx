import React from 'react'
import styled from 'styled-components'

function Footer() {
    const Div=styled.div`
    height:50px;
    background-color:#343a40 !important;
    color:white;
    display:flex;
    align-items:center
    `
  return (
    <>
        <Div>
            <p style={{margin:"100px"}}>Portfolio of Sangu Sai Shanmukha </p>

        </Div>
    </>
  )
}

export default Footer