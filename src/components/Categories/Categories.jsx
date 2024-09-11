import '../Categories/Categories.scss';
import pesticides from '../../imgs/pesticides.svg';
import pesticidesHover from '../../imgs/pesticidesHover.svg';
import cultures from '../../imgs/cultures.svg';
import culturesHover from '../../imgs/culturesHover.svg';
import pests from '../../imgs/pests.svg';
import pestsHover from '../../imgs/pestsHover.svg';
import substances from '../../imgs/substances.svg';
import substancesHover from '../../imgs/substancesHover.svg';
import list1 from '../../imgs/sheet.svg';
import list2 from '../../imgs/decor3.svg';

import Card from '../Card/Card';
import { useState } from 'react';

function Categories() {
  const [list1Sytle, setList1Sytle] = useState({
    top: '77px',
    left: '0px',
    transition: 'all 0.2s linear',
  });

  const [list2Sytle, setList2Sytle] = useState({
    top: '435px',
    left: '65.5%',
    transition: 'all 0.2s linear',
  });

  const listCards = [
    {
      name: 'Пестициды',
      img: pesticides,
      imgHover: pesticidesHover,
    },
    {
      name: 'Культуры',
      img: cultures,
      imgHover: culturesHover,
    },
    {
      name: 'Вредители',
      img: pests,
      imgHover: pestsHover,
    },
    {
      name: 'Действующие вещества',
      img: substances,
      imgHover: substancesHover,
    },
  ];

  return (
    <div className="categories">
      <div className="categories__wrapper">
        <img
          src={list1}
          alt="Зеленый лист"
          className="categories__list-1"
          style={list1Sytle}
        />
        <img
          src={list2}
          alt="Коричневый лист"
          className="categories__list-2"
          style={list2Sytle}
        />
        <h1 className="categories__title">Категории</h1>
        <div className="categories__wrapper-card">
          {listCards.map((el, index) => (
            <Card
              key={index}
              index={index}
              name={el.name}
              img={el.img}
              imgHover={el.imgHover}
              setList1Sytle={setList1Sytle}
              setList2Sytle={setList2Sytle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
