import React, { Component, Fragment } from 'react';
import Accueil from './components/Accueil';
import Location from './components/Location';
import Stages from './components/Stages';
import Asavoir from './components/Asavoir';
import Contacts from './components/Contacts'

export default class App extends Component {
  render() {
    return (
      <Fragment>

        <Accueil/>

        <Stages/>

        <Location/>

        <Asavoir/>

        <Contacts/>

      </Fragment>
    );
  }
}