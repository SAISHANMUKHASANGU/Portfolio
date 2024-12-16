import React from 'react';
import styled from 'styled-components';

function Resume() {
    // Main container
    const Div = styled.div`
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        h1 {
            text-align: center;
        }
    `;

    // Container for the boxes
    const BoxesContainer = styled.div`
        display: flex;
        gap: 30px;
        justify-content: space-around;
        width: 100%;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    `;

    // Individual Box
    const Box = styled.div`
        flex: 1;
        border: 1px solid gray;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        min-width: 300px;
        max-width: 400px;
        box-sizing: border-box;

        h1 {
            margin-bottom: 10px;
            text-align: center;
        }

        @media (max-width: 768px) {
            max-width: 90%;
        }
    `;

    // Elements inside each Box
    const Ele = styled.div`
        padding: 10px;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    // Paragraph styling
    const P = styled.p`
        color: gray;
    `;

    // Input range style
    const StyledRange = styled.input`
        width: 100%;
        background: lightblue;
        cursor: not-allowed;
    `;

    return (
        <Div id="Resume">
            <h1>My Resume</h1>
            <BoxesContainer>
                {/* Education Section */}
                <Box>
                    <h1>Education</h1>
                    <Ele>
                        <h3>2020-2024</h3>
                        <P>B.Tech CSE [AI & ML]</P>
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
                        <P>Shri Krishna Vidya Mandir (CBSE)</P>
                    </Ele>
                </Box>

                {/* Achievements Section */}
                <Box>
                    <h1>Achievements</h1>
                    <Ele>
                        <h3>2024</h3>
                        <P>TCS iON NQT (IT) - 77.60%</P>
                    </Ele>
                    <Ele>
                        <h3>2023</h3>
                        <P>Introduction to Machine Learning - NPTEL</P>
                    </Ele>
                    <Ele>
                        <h3>2022</h3>
                        <P>Programming in Java - NPTEL</P>
                    </Ele>
                </Box>

                {/* Languages Known Section */}
                <Box>
                    <h1>Languages Known</h1>
                    <Ele>
                        <h3>English</h3>
                        <StyledRange type="range" min="0" max="100" defaultValue={85} disabled />
                    </Ele>
                    <Ele>
                        <h3>Hindi</h3>
                        <StyledRange type="range" min="0" max="100" defaultValue={65} disabled />
                    </Ele>
                    <Ele>
                        <h3>Telugu</h3>
                        <StyledRange type="range" min="0" max="100" defaultValue={90} disabled />
                    </Ele>
                </Box>
            </BoxesContainer>
        </Div>
    );
}

export default Resume;
