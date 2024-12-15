import React from 'react'
import styled from 'styled-components'

function About() {

    const URL="https://drive.google.com/file/d/16HPX_LFGjMCcXXgx-yTBQLsGH6KuLOLe/view?usp=drive_link"

    const About=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    min-height:100px
    `

    const Box=styled.div`
    min-height:100px;
    // background-color:green;
    width:100%;
    border-right:1px solid gray;
    border-bottom:1px solid gray;
    display:flex;
    // justify-content:center;
    // align-items:center;
    flex-direction:column;
    padding:20px;
    min-height:260px;
    `
    const Item=styled.div`
    margin:5px;
    display:flex`

    const Button=styled.button`
    padding:10px;
    border-radius:10px;
    background-color:white;
    
    &:hover{
    cursor:pointer;
    background-color:black;
    color:white;
    }`

  return (
    <About id="About">
        <Box>
            <Item>
                <h1>Who am I?</h1>
            </Item>
            <Item>
                <h3>Trainee Intern</h3>
            </Item>
            <Item>
                <p style={{color:"gray"}}>I am a dedicated and hardworking individual with a passion for the IT industry. My approach is marked
 by creative thinking. As a newcomer, I am enthusiastic about contributing my skills and learning from
 experiences to make a positive impact in the professional realm. </p>
            </Item>
            <Item>
                <a href={URL}><Button>View Resume</Button></a>
            </Item>
            

        </Box>
        <Box>
            <Item>
                <h1>Personal Info</h1>
            </Item>
            <Item>
                <p style={{fontWeight:"bold"}}>Birthday:</p>
                <p style={{color:"gray"}}>6th July</p>
            </Item>
            <Item>
            <p style={{fontWeight:"bold"}}>Email:</p>
            <a href='mailto:sangusaishanmukha@gmail.com' style={{textDecoration:'none', color:'gray'}}>sangusaishanmukha@gmail.com</a>
            </Item>
            <Item>
                <p style={{fontWeight:"bold"}}>Address:</p>
                <p style={{color:"gray"}}>Visakhapatnam,Andhra Pradesh,India</p>
            </Item>
            <Item>
                <div style={{display:"flex",gap:"15px"}}>
                    <a href='https://www.linkedin.com/in/sai-shanmukha-sangu/' style={{fontSize:"20px"}}><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://github.com/SAISHANMUKHASANGU' style={{fontSize:"20px"}}><i class="fa-brands fa-github"></i></a>
                </div>
                
            </Item>
            </Box>
        <Box>
        <Item>
                <h1>My Expertise</h1>
            </Item>
            <Item>
                <p style={{fontWeight:"bold"}}>Python</p>
                
            </Item>
            <Item>
            <p style={{fontWeight:"bold"}}>HTML</p>
            
            </Item>
            <Item>
                <p style={{fontWeight:"bold"}}>CSS</p>
            </Item>
            <Item>
            <p style={{fontWeight:"bold"}}>JavaScript</p>
                
            </Item>
            <Item>
            <p style={{fontWeight:"bold"}}>C#</p>
                
            </Item>
            <Item>
            <p style={{fontWeight:"bold"}}>SQL</p>
                
            </Item>
        </Box>
        
    </About>
  )
}

export default About