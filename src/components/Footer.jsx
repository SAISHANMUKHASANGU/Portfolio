import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Div = styled.div`
        height: 50px;
        background-color: #343a40 !important;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px; /* Default font size for larger screens */

        @media (max-width: 1024px) {
            font-size: 12px; /* Smaller font size for tablets */
            padding: 0 20px;
        }

        @media (max-width: 768px) {
            font-size: 10px; /* Further reduced font size for smartphones */
            padding: 0 10px;
        }

        @media (max-width: 480px) {
            font-size: 8px; /* Even smaller font size for very small devices */
            padding: 0 5px;
        }
    `;

  return (
    <>
        <Div>
            <p style={{ margin: "0" }}>Portfolio of Sangu Sai Shanmukha</p>
        </Div>
    </>
  );
}

export default Footer;
