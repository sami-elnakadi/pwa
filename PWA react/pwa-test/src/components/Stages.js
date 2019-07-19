import React, { Component } from 'react';


export default class Stages extends Component {
    render() {
      return (
        <section className="Stages container">
          <h3  className="titre3">Nos stages</h3>
          <h4  className="titre3">SEMAINE DU 22 AU 26 JUILLET 2019 AU CENTRE SPORTIF DE PROFONDEVILLE</h4>
          <div className="row">
            
              <div className="col-md-4">
                  <h4 className="titre">Stage 20: Multisport</h4>
                  <div  className="texteAcc">
                    <p>Sports ballons, base-ball, foot, cuistax, athlétisme, une visite au potager et à la mini-ferme : poules, lapins, canards, moutons, chèvres, etc.
                    </p>
                    <p>
                        Animation : Aymeric De Noble
                    </p>
                    <p>Age : 5-10 ans</p>
                    <p>Prix: 75 euros la journée</p>
                  </div>
              </div>

              <div className="col-md-4">
                <h4 className="titre">Stage 21: Spécial filles</h4>
                <div  className="texteAcc">
                  <p>Multisports, sports ballons, base-ball, sports raquettes : tennis, badminton et tennis de table, cuistax, initiation sur hoverboards, nombreux tournois, Walibi, quad, etc.</p>
                    <p>  
                        Animation : Malou Rurangwa
                    </p>
                    <p>Age : 9 - 14 ans </p>
                    <p>Prix: 65 euros la journée, plus 20 euros si Walibi</p>
                </div>
              </div>

              <div className="col-md-4">
                <h4 className="titre">Stage 22: Journée Quad</h4>
                <div  className="texteAcc">
                  <p>Le 26 juillet 2019 
                      rue des Six-Bras 25 à Lesve
                      De 9 h 30 à 15 h 30.
                      Possibilité de garderie dès 8h00 et jusqu'à 17h30 au centre sportif.
                  </p>
                    <p>  
                        Animation :Bernard Evrard
                    </p>
                    <p>Age : 6-14 ans</p>
                    <p>Prix: 35 euros la journée</p>
                </div>
              </div>

            </div>
           
        </section>
      );
    }
  }