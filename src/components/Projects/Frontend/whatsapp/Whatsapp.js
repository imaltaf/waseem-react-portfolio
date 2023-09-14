import React from 'react';

const Whatsapp = () => {
  const phoneNumber = '7022831935'; // Replace with your phone number

  const buttonStyle = {
    backgroundColor: '#25d366', // WhatsApp green color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
  };

  const handleClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      <span style={iconStyle}>Chat on WhatsApp</span>
    </button>
  );
};

export default Whatsapp;
