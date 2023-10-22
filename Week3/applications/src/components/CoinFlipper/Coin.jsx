import './CoinStyles.css';
import CoinTail from './tail.png';
import CoinHead from './head.png';
const Coin = (props) => {
  const { currentStatus, rotate } = props;

  return (
    <div className="Coin-container">
      <div className={`Coin ${rotate && 'Coin-rotate'}`}>
        <img
          src={CoinTail}
          alt=""
          className={currentStatus === 'yazi' ? 'Coin-back' : 'Coin-front'}
        />
        <img
          src={CoinHead}
          alt=""
          className={currentStatus === 'yazi' ? 'Coin-front' : 'Coin-back'}
        />
      </div>
    </div>
  );
};

export default Coin;
