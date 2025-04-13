import React from 'react';
import './Cards.css'; // optional: if you want to apply styles

const Cards = () => {
  return (
    <div id="card-area">
      <div className="wrapper">
        <div className="box-area">
          <div className="box">
            <img src="/images/pain.jpg" alt="pain" />
            <div className="overlay">
              <h3>Consommation de Pain</h3>
              <p>
                113 000 tonnes de pain sont gaspillées <br /> chaque année en Tunisie.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <img src="/images/dinar.jpg" alt="dinar" />
            <div className="overlay">
              <h3>Coût pour les Ménages</h3>
              <p>
                Une famille tunisienne gaspille en moyenne <br/> 240 dinars par an en nourriture.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <img src="/images/food.jpg" alt="food" />
            <div className="overlay">
              <h3>Quantité par Habitant</h3>
              <p>
                Le gaspillage alimentaire est estimé à <br/> 172 kg par personne par an.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;