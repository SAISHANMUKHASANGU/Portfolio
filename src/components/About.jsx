import React from 'react';
import styled from 'styled-components';

function About() {
    const URL = "https://drive.google.com/file/d/16HPX_LFGjMCcXXgx-yTBQLsGH6KuLOLe/view?usp=drive_link";

    const About = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        
        gap: 20px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 30px;
        }
    `;

    const Box = styled.div`
        flex: 1;
        min-height: 260px;
        max-width: 30%;
        
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;

        &:last-child {
            border-right: none;
        }

        @media (max-width: 768px) {
            max-width: 100%;
            border-right: none;
        }
    `;

    const Item = styled.div`
        margin: 10px 0;
        display: flex;
        flex-direction: column;

        &.horizontal {
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }
    `;

    const Button = styled.button`
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        border: 1px solid gray;
        font-weight: bold;

        &:hover {
            cursor: pointer;
            background-color: black;
            color: white;
        }
    `;

    const IconLinks = styled.div`
        display: flex;
        gap: 15px;

        a {
            font-size: 20px;
            color: black;
            text-decoration: none;

            &:hover {
                color: darkorange;
            }
        }
    `;

    return (
        <About id="About">
            {/* Who Am I Section */}
            <Box>
                <Item>
                    <h1>Who am I?</h1>
                </Item>
                <Item>
                    <h3>Trainee Intern</h3>
                </Item>
                <Item>
                    <p style={{ color: "gray" }}>
                        I am a dedicated and hardworking individual with a passion for the IT industry. My approach is marked
                        by creative thinking. As a newcomer, I am enthusiastic about contributing my skills and learning from
                        experiences to make a positive impact in the professional realm.
                    </p>
                </Item>
                <Item>
                    <a href={URL}>
                        <Button>View Resume</Button>
                    </a>
                </Item>
            </Box>

            {/* Personal Info Section */}
            <Box>
                <Item>
                    <h1>Personal Info</h1>
                </Item>
                <Item className="horizontal">
                    <p style={{ fontWeight: "bold" }}>Birthday:</p>
                    <p style={{ color: "gray" }}>6th July</p>
                </Item>
                <Item className="horizontal">
                    <p style={{ fontWeight: "bold" }}>Email:</p>
                    <a
                        href="mailto:sangusaishanmukha@gmail.com"
                        style={{ textDecoration: "none", color: "gray" }}
                    >
                        sangusaishanmukha@gmail.com
                    </a>
                </Item>
                <Item className="horizontal">
                    <p style={{ fontWeight: "bold" }}>Address:</p>
                    <p style={{ color: "gray" }}>Visakhapatnam, Andhra Pradesh, India</p>
                </Item>
                <Item>
                    <IconLinks>
                        <a href="https://www.linkedin.com/in/sai-shanmukha-sangu/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/SAISHANMUKHASANGU" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </IconLinks>
                </Item>
            </Box>

            {/* My Expertise Section */}
            <Box>
                <Item>
                    <h1>My Expertise</h1>
                </Item>
                {['Python', 'HTML', 'CSS', 'JavaScript', 'C#', 'SQL'].map((skill, index) => (
                    <Item key={index}>
                        <p style={{ fontWeight: "bold", color: "gray" }}>{skill}</p>
                    </Item>
                ))}
            </Box>
        </About>
    );
}

export default About;
