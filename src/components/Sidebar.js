import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

            
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

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px;  
  text-align: center; 
  margin-bottom: 0; 
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
  }

  const NavIcon = styled.div`
`;

export default class Sidebar extends React.Component {
  
    render() {
    return (
        <SideNav></SideNav>
    );
  }
}