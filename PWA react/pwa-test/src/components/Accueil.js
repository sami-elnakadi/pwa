import React, { Component } from 'react';
import banner from '/home/user/Bureau/pwa/PWA react/pwa-test/src/images/banner.jpg';

export default class Accueil extends Component {
    render() {
      return (
        <section className="Accueil">
          <img src={banner} className="img-fluid" />
          <div className="acc">
            <div className="col-md-12">
              <h2 className="titre2">L'A.S.B.L. Sports Vacances vous souhaite la bienvenue.</h2>
              <p>Depuis le début de l'organisation de nos stages nous travaillons en étroite collaboration avec la Commune de Profondeville.
                L'association aura le souci de promouvoir davantage les disciplines sportives, d'ateliers d'éveil, artistiques et récréatifs, dans des infrastructures adéquates, avec des moniteurs diplômés de notre commune.
              </p>
              <p className="texteAcc">Les inscriptions pour les stages d'été sont ouvertes !
                  Les attestations de fréquentation pour les stages 2018 destinés à votre déclaration fiscale sont en cours d'envoi. Vous devriez les recevoir dans les prochains jours.</p>
            </div>
          </div>
        </section>
      );
    }
  }