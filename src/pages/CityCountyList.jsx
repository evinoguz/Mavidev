import React, { useState, useEffect } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import CityCountyService from '../services/CityCountyService';
export default function CityCountyList() {
  const [cityCounties, setCityCounties] = useState([]);

  useEffect(() => {
    let citycountyService = new CityCountyService();
    citycountyService
      .getCityCountyList()
      .then((result) => setCityCounties(result.data.data));
  }, []);

  return (
    <div style={{ width: '60%' }}>
      <Table celled textAlign="center"> 
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İl</Table.HeaderCell>
            <Table.HeaderCell>İlçe</Table.HeaderCell>
            <Table.HeaderCell>Eylem</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
          {cityCounties.map((citycounty) => (
            <Table.Row key={citycounty.id}>
              <Table.Cell>{citycounty.county?.city.cityName}</Table.Cell>
              <Table.Cell>{citycounty.county?.countyName}</Table.Cell>
              <Table.Cell textAlign="center">
                <Icon color={'green'} name="edit outline left" />
                <Icon color={'red'} name="delete left" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon>
          <Icon name="chevron left" />
        </Menu.Item>
        <Menu.Item as="a">1</Menu.Item>
        <Menu.Item as="a">2</Menu.Item>
        <Menu.Item as="a">3</Menu.Item>
        <Menu.Item as="a">4</Menu.Item>
        <Menu.Item as="a" icon>
          <Icon name="chevron right" />
        </Menu.Item>
      </Menu>
    </div>
  );
}
