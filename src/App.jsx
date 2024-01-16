import React from 'react';
import './App.css';

function App() {
  // const person = {
  //   name: "Max",
  //   age : 30 ,
  //   adress : {
  //     street : "fbffh",
  //     city : "Berlin",
  //   }
  // };

  const citys = [
    {
      id: 1,
      name: "Leipzig",
      image: "https://www.reisereporter.de/resizer/BiBVTB8ZVqa1O0CgG0csxJpltwo=/596x396/filters:quality(70):format(webp)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/26HMLZS4UTJF7ZPRT64PDZXGWK.jpg",
    },
    {
      id: 2,
      name: "Dresden",
      image: "https://www.reisereporter.de/resizer/BiBVTB8ZVqa1O0CgG0csxJpltwo=/596x396/filters:quality(70):format(webp)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/26HMLZS4UTJF7ZPRT64PDZXGWK.jpg",
    },
    {
      id: 3,
      name: "Berlin",
      image: "https://www.reisereporter.de/resizer/BiBVTB8ZVqa1O0CgG0csxJpltwo=/596x396/filters:quality(70):format(webp)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/26HMLZS4UTJF7ZPRT64PDZXGWK.jpg",
    },
  ];

  // console.log(citys);

  return (
    <>
      <div>
        {/* <p>name : {person.name}</p>
        <p>name : {person.age}</p>
        <p>street : {person.adress.street}</p>
        <p>city : {person.adress.city}</p> */}

        <img src="https://media.istockphoto.com/id/913059310/de/vektor/lion-head.jpg?s=2048x2048&w=is&k=20&c=yFEar1iIkScDYp0eLzD-2Ed4WK0_UAh50vdXJyI-ZHo=" alt="Lion" />

        <img src="./src/assets/mouse.png" alt="Mouse" />

        {citys.map(city => (
          <div key={city.id}>
            <p>City: {city.name}</p>
            <img src={city.image} alt={city.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
