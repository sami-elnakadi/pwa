import React, { Component } from 'react';


export default class Asavoir extends Component {
    render() {
      return (
        <section className="Asavoir container">
          <h3 className = "titre3"> A savoir </h3>
          <div className = "row">

            <div className = "col-md-4">
              <h4 className="titre">Inscription</h4>
              <p className= "texteAcc">Après inscription, si votre enfant ne peut y participer, veuillez nous prévenir le plus tôt possible (certains stages ont des places limitées).
Si vous inscrivez votre enfant via Internet un mail de réception vous sera envoyé.
Dans les autres modes d'inscription, il ne sera pas envoyé de confirmation écrite.  </p>
            </div>

            <div className = "col-md-4">
              <h4 className="titre">Horaire</h4>
              <p className = "texteAcc">De 9h30 à 16h00.
  Garderie gratuite pour tous les stages dès 8h00 jusqu'à 17h30 (à l'exception des journées "quad" et des journées "équitation").</p>
            </div>

            <div className = "col-md-4">
              <h4 className="titre">Paiement</h4>
              <p className = "texteAcc">Le paiement se fera le premier jour du stage.
                  Nous acceptons les chèques sport et culture de la Communauté française comme payement.

                  Réductions :

                  - de 5 euros pour le deuxième enfant ;
                  - de 10 euros pour le troisième ;
                  - pas de réduction pour ½ journée.
                </p>
            </div>

          </div>
          <h4 className="titreInfo">Infos supplémentaires</h4>
          <div className="row">
            
            <div className = "col-md-3">
              <h5 className="titre">Tenue</h5>
              <p className = "texteAcc">Vêtements adaptés aux sports, aux activités du jour.
(Semelles noires interdites à l'intérieur du centre sportif de Profondeville).</p>
              </div>

              <div className = "col-md-3">
              <h5 className="titre">A prévoir</h5>
              <p className = "texteAcc">Un repas de midi ainsi que des collations et des boissons en suffisance.</p>
              </div>

              <div className = "col-md-3">
              <h5 className="titre">Dépaclement</h5>
              <p className = "texteAcc">Ils se font avec le car communal.</p>
              </div>

              <div className = "col-md-3">
              <h5 className="titre">En cas de maladie </h5>
              <p className = "texteAcc">L'A.S.B.L. rembourse 8 € par jour uniquement en cas de maladie.</p>
              </div>

              <div className = "col-md-12">
                <h5 className="titre">Attestations</h5>
                <p className="texteAcc">En ce qui concerne l'attestation pour la mutuelle ou l'employeur, il faudra la remettre en main propre au moniteur ou en faire la demande au début du stage.
Nous pouvons également vous délivrer, en fin d'année, une attestation de déduction fiscale reprenant tous les stages auxquels votre enfant aura participé. Néanmoins, il vous aura fallu avoir correctement rempli et restitué les formulaires délivrés à chaque stage.</p>
              </div>
          </div>
         
        </section>
      );
    }
  }