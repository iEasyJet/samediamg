import './Card.scss';
import { useState } from 'react';

function Card(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    if (props.index === 0) {
      props.setList1Sytle({
        top: '77px',
        left: '10px',
        transition: 'all 0.2s linear',
      });

      props.setList2Sytle({
        top: '435px',
        left: '66.5%',
        transition: 'all 0.2s linear',
      });
    }
    if (props.index === 1) {
      props.setList1Sytle({
        top: '77px',
        left: '20px',
        transition: 'all 0.2s linear',
      });

      props.setList2Sytle({
        top: '440px',
        left: '66%',
        transition: 'all 0.2s linear',
      });
    }
    if (props.index === 2) {
      props.setList1Sytle({
        top: '85px',
        left: '35px',
        transition: 'all 0.2s linear',
      });

      props.setList2Sytle({
        top: '440px',
        left: '67.5%',
        transition: 'all 0.2s linear',
      });
    }
    if (props.index === 3) {
      props.setList1Sytle({
        top: '95px',
        left: '45px',
        transition: 'all 0.2s linear',
      });

      props.setList2Sytle({
        top: '450px',
        left: '67.5%',
        transition: 'all 0.2s linear',
      });
    }
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    props.setList1Sytle({
      top: '77px',
      left: '0px',
      transition: 'all 0.2s linear',
    });

    props.setList2Sytle({
      top: '435px',
      left: '65.5%',
      transition: 'all 0.2s linear',
    });
  };

  const cardStyle = {
    backgroundImage: !isHover ? `url(${props.img})` : `url(${props.imgHover})`,
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="card__title">{props.name}</h2>
      <div className="card__circle-wrapper">
        <div className="card__circle-1"></div>
        <div className="card__circle-2"></div>
        <div className="card__circle-3"></div>
      </div>
    </div>
  );
}

export default Card;
