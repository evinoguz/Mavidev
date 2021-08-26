import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Navi() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} to="/" name="Anasayfa" />
            <Menu.Item name="Hakkında" />
            <Menu.Item name="İletişim" />
            <Menu.Menu position="right">
              <Menu.Item name="logout" />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
}
