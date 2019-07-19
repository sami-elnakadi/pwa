import React, { Component } from 'react';


export default class Contacts extends Component {
    render() {
      return (
        <section className="Contacts container">
          <h3 className="titre3">Nous contacter</h3>
          
            <form className="row">
              <div className="col-md-4">

                <div className="form-group">
                <label for="inputname">Nom:</label>
                <input type="text" name="lname"></input>
                </div>

                <div className="form-group">
                <label for="inputFname">Prénom:</label>
                <input type="text" name="fname"></input>
                </div>
              
              
                <div className="form-group">
                <label for="inputmessSub">Sujet du message:</label>
                <input type="text" name="fname"></input>
                </div>

                <div className="form-group">
                  <label for="inputemail">Adresse Email:</label>
                  <input type="email" id="mail" placeholder="Entrez votre e-mail"></input>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                <label for="inputmess">Message:</label>
                <textarea type="text" name="message"  rows="6" cols="100"></textarea>
                </div>
              </div>  
            </form>
          
        </section>
      );
    }
  }