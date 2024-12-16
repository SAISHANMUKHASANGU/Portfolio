import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Tracks() {
    const Box = styled.div`
        height: 100px;
        background-color: #343a40;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        padding: 10px;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: 8px;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            padding: 6px;
        }
    `;

    const [coded, setCoded] = useState(10000);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCoded((prevCoded) => prevCoded + 3);
        }, 24 * 60 * 60 * 1000); // Increment every 24 hours

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <Box id="Tracks">
            <h1>Hours Coded: {coded}</h1>
        </Box>
    );
}

export default Tracks;
