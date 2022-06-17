import React, { useState } from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

export default ({ light = false, font, toggleNavbar, cms = {} }) => <Navbar dark={!light} light={light} expand className="NavigationItems position-static">
    <Container>
        <Collapse navbar>
            <Nav className="d-block d-lg-flex align-items-center" navbar>
                <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/" icon="fas fa-home">{cms.menu.home}</NavigationItem>
                <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/about">{cms.menu.about}</NavigationItem>
                <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/services">{cms.menu.services}</NavigationItem>
                <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/publications">{cms.menu.publications}</NavigationItem>
                <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/contact">{cms.menu.contact}</NavigationItem>
            </Nav>
        </Collapse>
    </Container>
</Navbar>;