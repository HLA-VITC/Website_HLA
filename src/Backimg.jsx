import React from 'react'
import backpic from './img/BG1.png';

function Backimg() {
  const backgroundImageUrl = backpic;

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100wh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    
  };
  
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 10px',
    border: '2px',
    fontFamily: 'Roboto Serif',
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '12px',
    background: 'rgba(37, 16, 16, 0.50)',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
  };

  return (
    <div style={divStyle} id='home'>
      <div style={textStyle}>
        <h1>Hindi Literary</h1>
        <h1>Association</h1>
      </div>
    </div>
  );
}

export default Backimg;