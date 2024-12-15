import React from 'react'
import styled from 'styled-components'

function Resume() {
    const Div=styled.div`
    padding-top:40px;
    display:flex;
    // align-items:center;
    justify-content:space-between;
    margin:100px;
    flex-direction:column;
    gap:5px;`
    

    const Box=styled.div`
   
    // background-color:green;
    gap:15px;
    
    border:1px solid gray;
    
    display:flex;
    flex-direction:column;
    padding:20px;
    min-height:0px;
    `
    const Box2=styled.div`
   
    // background-color:green;
    gap:15px;
    
    border:1px solid gray;
    
    display:flex;
    flex-direction:column;
    padding:20px;
    min-height:0px;
    `
    

   

    const Ele=styled.div`
     padding:5px;
     border:2px solid black;
     display:flex;
     flex-direction:column;
    `

    const P=styled.p`
    color:gray`

  return (
    <>

        
        <Div id='Resume'>
            <h1>My Resume</h1>
            <div style={{display:"flex", gap:"50px"}}>
                <Box>
                    <h1>Education</h1>
                    <Ele>
                        <h3>2020-2024</h3>
                        <P>B.Tech CSE[AI&ML]</P>
                        <P>Raghu Engineering College</P>

                    </Ele>
                    <Ele>
                        <h3>2018-2020</h3>
                        <P>Intermediate [MPC]</P>
                        <P>Tirumala Junior College</P>

                    </Ele>
                    <Ele>
                        <h3>2017-2018</h3>
                        <P>High School [Class 10th]</P>
                        <P>Shri Krishna Vidya mandhir (CBSE)</P>

                    </Ele>
                </Box>
                
                <Box2>
                    <h1>Achivements</h1>
                    <Ele>
                        <h3>2024</h3>
                        <P>TCS iON NQT (IT) - 77.60% </P>
                    </Ele>
                    <Ele>
                        <h3>2023</h3>
                        <P>Introduction to Machine Learning</P>
                    </Ele>
                    <Ele>
                        <h3>2022</h3>
                        <P>Programing in java</P>
                    </Ele>
                    
                    
                    
                </Box2>
                <Box>
                    <h1>Languages Known</h1>
                    <Ele>
                        <h3>English</h3>
                        <input type='range' min="0" max="100" defaultValue={85} disabled style={{background:"lightblue"}}/>
                        

                    </Ele>
                    <Ele>
                        <h3>Hindi</h3>
                        <input type='range' min="0" max="100" defaultValue={65} disabled style={{background:"lightblue"}}/>

                    </Ele>
                    <Ele>
                        <h3>English</h3>
                        <input type='range' min="0" max="100" defaultValue={90} disabled style={{background:"lightblue"}}/>

                    </Ele>
                </Box>
            </div>
            

        </Div>
    </>
  )
}

export default Resume