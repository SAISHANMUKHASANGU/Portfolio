import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const Headerdiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background-color: antiquewhite;
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    `;

    const Navbar = styled.nav`
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 15px;
            background-color: antiquewhite;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px;
            border-radius: 8px;
            display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        }
    `;

    const Navlinks = styled.div`
        display: flex;
        gap: 15px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }
    `;

    const Anchor = styled.a`
        text-decoration: none;
        color: black;
        font-weight: 500;

        &:hover {
            color: darkorange;
        }
    `;

    const Brand = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const Hamburger = styled.div`
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;

        div {
            width: 25px;
            height: 3px;
            background-color: black;
            border-radius: 2px;
        }

        @media (max-width: 768px) {
            display: flex;
        }
    `;

    return (
        <>
            <Headerdiv>
                <Brand>
                    <h1>Sangu Sai Shanmukha</h1>
                    <h3>Trainee Intern - Neo Technologies</h3>
                </Brand>

                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburger>

                <Navbar isOpen={isOpen}>
                    <Navlinks>
                        <Anchor href="#">Home</Anchor>
                        <Anchor href="#About">About</Anchor>
                        <Anchor href="#Resume">Resume</Anchor>
                        <Anchor href="#Tracks">Tracks</Anchor>
                        <Anchor href="#Contact">Contact</Anchor>
                    </Navlinks>
                </Navbar>
            </Headerdiv>
        </>
    );
}

export default Header;
