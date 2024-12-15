import React from 'react'
import styled from 'styled-components'

function Header() {

    const Headerdiv=styled.div`
    display:flex;
    
    align-items:center;
    justify-content:space-between;
    padding:15px;
    background-color:antiquewhite;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2)`

    const Navlinks=styled.div`
    display:flex;
    gap:15px
    `

    const Anchor=styled.a`
    text-decoration: none;
    color:black`

    const Brand=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
    `

    

  return (
    <>
        <Headerdiv>
       
            <Navlinks>
                <Anchor href="#">Home</Anchor>
                <Anchor href="#about">About</Anchor>
                <Anchor href='#Resume'>Resume</Anchor>
                <Anchor href='#Tracks'>Tracks</Anchor>
                
            </Navlinks>
            <Brand>
                <h1>Sangu Sai Shanmukha</h1>
                <h3>Trainee Intern-Neo Technologies</h3>
            </Brand>
            <Navlinks>
                <Anchor href="#Contact">Contact</Anchor>
                
            </Navlinks>
        
        </Headerdiv>
    </>
  )
}

export default Header