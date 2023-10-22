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
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [results, setResults] = useState([]);
  const [rotate, setRotate] = useState(false);

  const start = () => {
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResults([...results, randomElement]);
      setRotate(false);
    }, 1000);
  };

  const heads = results.filter((item) => item === options[0]).length;
  const tails = results.filter((item) => item === options[1]).length;

  return (
    <div className="Coin-container">
      <h1>Yazi ya da Tura</h1>
      <Coin currentStatus={currentStatus} rotate={rotate} />
      <br />

      <button onClick={start}>Atis Yap</button>
      {results.length > 0 && !rotate && <h3>{currentStatus} geldi</h3>}
      <p>
        Toplam <span className="CoinFlipper-number">{results.length}</span> atış
        yapıldı
      </p>
      <p>
        <span className="CoinFlipper-number">{heads}</span> kez <b>Yazı </b>
        geldi
      </p>
      <p>
        <span className="CoinFlipper-number">{tails}</span> kez <b>Tura </b>
        geldi
      </p>
    </div>
  );
};

export default CoinFlipper;
