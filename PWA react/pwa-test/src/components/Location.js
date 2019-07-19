import React, { Component } from 'react';
import chateaux from '/home/user/Bureau/pwa/PWA react/pwa-test/src/images/chateaux.png';


export default class Location extends Component {
    render() {
      return (
        <section className="Location container">
          <h3 className = "titre3"> Location </h3>
          <h4 className = "titre3">L'A.S.B.L. Sports Vacances loue, pour toutes vos festivités</h4>
          <div className ="row">

            <div className="col-md-6">
            <h5>Pour anniversaires, communions, réunions de famille, ...</h5>
            <p className="texteAcc">Des châteaux gonflables couverts

(en semaine : dès 100,00 € - le week-end : 125,00 et 150,00 €)

Renseignements au 081/43.43.94 ou au 0495/47.56.19 (Bernard Evrard)</p>
            </div>

            <div className="col-md-6">
            <img className="chat" src={chateaux} className="img-fluid" />
            </div>

          </div>
        </section>
      );
    }
  }