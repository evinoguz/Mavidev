import React from 'react';
import CityCountyList from '../pages/CityCountyList';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router';
import CityCountyAdd from '../pages/CityCountyAdd';
import Home from '../pages/Home';

export default function Dashboard() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path="/" component={Home} />
              <Route exact path="/citycounty/add" component={CityCountyAdd} />
              <Route exact path="/citycounty/list" component={CityCountyList} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}
