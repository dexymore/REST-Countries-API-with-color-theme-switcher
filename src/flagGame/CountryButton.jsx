import React, { useState, useEffect } from 'react';

function CountryButton({ country, candidateCountry, onButtonClick , disabled}) {
  const [buttonState, setButtonState] = useState(''); // 'correct', 'incorrect', or ''

  const handleClick = () => {
    onButtonClick(country, setButtonState);

  };

  return (
    <button
      className={`countryButton ${buttonState}`}
      onClick={handleClick}

      disabled={disabled || buttonState !== ''}
    >
      {country.name.common}
    </button>
  );
}

export default CountryButton;