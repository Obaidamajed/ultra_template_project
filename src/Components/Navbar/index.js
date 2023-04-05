import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, Transport } from "./style.js"


const Navbar = () => { // الفنكشن كومبوننت ما فيها رندر
return (
<NavbarSection>
    
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>
        
        <UlList>
            <ListItem> <Transport to="/">Home</Transport> </ListItem>
            <ListItem> <Anchor href="#workk">Work</Anchor> </ListItem>
            <ListItem> <Anchor href="#Portfolioo">Portfolio</Anchor> </ListItem>
            <ListItem> <Anchor href="#Resumee">Resume</Anchor> </ListItem>
            <ListItem> <Anchor href="#About">About</Anchor> </ListItem>
            <ListItem> <Transport to="/contact">Contact</Transport> </ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
)
}

export default Navbar;

