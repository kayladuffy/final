import React from 'react';
import styled from "styled-components";

            
const StyledSideNav = styled.div`
    position: fixed;
    height: 100%;
    width: 75px; 
    z-index: 1;
    top: 3.4em;
    background-color: #222;
    overflow-x: hidden;
    padding-top: 10px;
`;

class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
      }
}

export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}