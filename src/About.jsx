import React from 'react';
import imgaboutus from './img/AboutUsimg.png';

const About = () => {
  const sectionStyle = {
    background: '#FFF3E2',
    padding: '40px',
    alignItems: 'center',
  };

  const containerStyle = {
    height: '81vh',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };

  const headingStyle = {
    color: '#000',
    fontSize: '48px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    margin: '0',
    marginLeft: '6px',
    marginBottom: '13px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    background: '#FA9884',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const imageStyle = {
    height: '63px',
    width: '63px',
  };

  return (
    <section className="about-section" style={sectionStyle} id='about'>
      <div className="container" style={containerStyle}>
        <div style={headingContainerStyle}>
          <img src={imgaboutus} alt="Image" style={imageStyle} />
          <h3 style={headingStyle}>About Us</h3>
        </div>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit adipisci officia saepe consequatur fugit
          dolor ullam maxime veniam, quisquam reiciendis illo suscipit atque possimus? Vel unde necessitatibus blanditiis
          a animi.
        </p>
        <button className="btn btn-primary" style={buttonStyle}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
