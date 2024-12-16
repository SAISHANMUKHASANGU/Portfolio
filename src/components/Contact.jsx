import React from 'react';
import styled from 'styled-components';

function Contact() {

    const Box = styled.div`
        background-image: url("https://www.mapsofindia.com/maps/andhrapradesh/vishakhapatnam-city-map.jpg");
        background-size: 100% 100%;
        height: 400px;
        gap: 15px;
        border: 1px solid gray;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 80px;

        @media (max-width: 1024px) {
            height: 350px;
            padding-top: 60px;
        }

        @media (max-width: 768px) {
            height: 300px;
            padding-top: 40px;
        }

        @media (max-width: 480px) {
            height: 250px;
            padding-top: 20px;
        }
    `;

    const InnerBox = styled.div`
        height: 200px;
        width: 400px;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;

        @media (max-width: 1024px) {
            width: 350px;
            padding: 15px;
        }

        @media (max-width: 768px) {
            width: 300px;
        }

        @media (max-width: 480px) {
            width: 100%;
            padding: 10px;
        }
    `;

    const Div = styled.div`
        display: flex;
        gap: 3px;
    `;

    return (
        <>
            <Box id="Contact">
                <InnerBox>
                    <Div>
                        <h2>Get in Touch</h2>
                    </Div>
                    <Div>
                        <p style={{ fontWeight: "bold" }}>Email:</p>
                        <a href='mailto:sangusaishanmukha@gmail.com' style={{ textDecoration: 'none', color: 'gray' }}>sangusaishanmukha@gmail.com</a>
                    </Div>
                    <Div>
                        <p style={{ fontWeight: "bold" }}>Address:</p>
                        <p style={{ color: "gray" }}>Visakhapatnam, Andhra Pradesh, India</p>
                    </Div>
                    <Div>
                        <div style={{ display: "flex", gap: "15px" }}>
                            <a href='https://www.linkedin.com/in/sai-shanmukha-sangu/' style={{ fontSize: "20px" }}><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href='https://github.com/SAISHANMUKHASANGU' style={{ fontSize: "20px" }}><i class="fa-brands fa-github"></i></a>
                        </div>
                    </Div>
                </InnerBox>
            </Box>
        </>
    );
}

export default Contact;
