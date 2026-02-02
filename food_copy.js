import React from 'react';
import PropTypes from 'prop-types';

function Food({id, name, picture, rating}) {
  return (
  <div>
  <h2>key : {id}</h2>
  <h2>rating : {rating}/5</h2>
  <h2>i like {name}</h2>
  <img src={picture} alt={name} />
  </div>
  );
}


const foodLike = [
  {
    id : 1,
    name: 'kimchi',
    image: 'https://delishglobe.com/recipe/korean-kimchi-fermented-vegetables/',
    rating: 3.5
  },
  {
    id : 2,
    name: 'samgyeopsal',
    image: 'https://marcwiner.com/wp-content/uploads/2024/11/Samgyeopsal-en-tete-750x563.jpg',
    rating: 4
  },
  {
    id : 3,
    name: 'bibipbap',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijvf9RdxH35YqX5i9CDQST6L4HFJ1vrPNzH9PKjgoflW9tzO4dN5KlaKCyTEFzc3FZIhCJBVbpo_3IhN1wRC9s39lnP2woB1JHrGgLfAZDeNfDKmUBMqJ2BKDdQ_-vFDQtedHwiw/s1600/01+Yangpunibibipbap+(Big+Bowl+Bibipbap)+@+2D1N+Soju+Bang+(Large).jpg',
    rating: 4.9
  },
  {
    id : 4,
    name: 'doncasu',
    image: 'https://stevenbammel.com/wp-content/uploads/2013/07/6a011279704a5b28a40191046be93d970c-320wi.jpg',
    rating: 4.8
  },
  {
    id : 5,
    name: 'kimbap',
    image: 'https://www.seriouseats.com/thmb/WtcBGMWbdUcAIVe8zg4VCm2aqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg',
    rating: 4.2
  }

];

Food.prototype = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  taring : PropTypes.number.isRequired,
};

function App() {
  return (<div>
    {foodLike.map(dish => (
      <Food id = {dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>
    ))}
    </div>
    );
  }

export default App;
