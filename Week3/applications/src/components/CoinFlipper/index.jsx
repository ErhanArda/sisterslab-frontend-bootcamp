import { useState } from 'react';
import './CoinFlipperStyles.css';
import Coin from './Coin';

const options = ['yazi', 'tura'];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};
const CoinFlipper = () => {
  const [rotate, setRotate] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [results, setResults] = useState([]);

  const start = () => {
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResults([...results, randomElement]);
      setRotate(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Yazi ya da Tura</h1>
      <br />
      <Coin currentStatus={currentStatus} rotate={rotate} />
      <br />

      <button onClick={start}>Atis Yap</button>

      {/* Tura geldi

      Toplam 24 atış yapıldı

      11 kez Yazı geldi

      13 kez Tura geldi */}
    </div>
  );
};

export default CoinFlipper;
