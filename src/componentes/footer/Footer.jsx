import React from 'react';
import Styles from '../Estilos/footer.style.css';

const Footer = () => {
  return (
    <div className='container-fluid bg-primary text-light'>
      <div className= {`row ${Styles.foalto}`}>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center '>
          <h1>Rick and Morty</h1>
        </div>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center '>
          <h1>Consumo de Api</h1>
        </div>
      </div>

    </div>
  )
};

export default Footer;