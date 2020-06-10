import React, { useState } from 'react';
import FormConvert from './components/FormConvert/FormConvert';

const App = () => {
  const [rgbColor, setRgbColor] = useState('rgb(153, 33, 255)');
  const [isError, setIsError] = useState(false);

  const setBackgroundColor = hexColor => {
    if (hexColor === 'Ошибка!') {
      setIsError(true);
      setRgbColor('rgb(233, 75, 53)');
    } else {
      setRgbColor(hexColor);
    }
  };

  return (
    <div className="window" style={{ backgroundColor: rgbColor }}>
      <FormConvert
        rgbColor={isError ? 'Ошибка!' : rgbColor}
        setBackgroundColor={setBackgroundColor}
      />
    </div>
  );
};

export default App;


