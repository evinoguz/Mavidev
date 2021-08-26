import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Categories() {
    return (
      <div>
        <Menu pointing vertical>
          <Menu.Item header>İL/İLÇE</Menu.Item>
          <Menu.Item as={NavLink} to="/citycounty/add" name="Ekle" />
          <Menu.Item as={NavLink} to="/citycounty/list" name="Listele" />
        </Menu>
      </div>
    );
}
