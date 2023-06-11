import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function User({ name, channelName, ...user }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

function App() {
  const socialNetwork = 'YouTube';
  const fruits = ['banana', 'orange', 'apple'];
  fruits.push('mango');
  const [banana, orange, ...restFruits] = fruits;

  // const newFruits = fruits.map(function (item, index) {
  //   return `Fruit (${index}): ${item}`;
  // });
  // console.log(newFruits);

  let newName = 'Denis';
  const user = {
    name: 'Maks',
    age: 27,
    youtubeChannel: 'MyYouTube',
    [socialNetwork]: 'TravelsCode',
    myFruits: ['banana', 'orange'],
  };

  const { name, ...restNames } = user;

  return (
    <div className="App">
      <User {...user} />
    </div>
  );
}

export default App;
