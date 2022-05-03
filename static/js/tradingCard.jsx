'use strict';

// const tradingCardData = [
//   {
//     name: 'Balloonicorn',
//     skill: 'video games',
//     imgUrl: '/static/img/balloonicorn.jpg',
//   },
// ];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function tradingCardContainer() {
  return(
    <div>
      HELLLOOOOOOOOOOO
    </div>
  );
}

ReactDom.render(<tradingCardContainer />, document.querySelector('#all-cards'))
// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// ReactDOM.render(
//   <TradingCard name="WOWOmelon" skill="seed choke" imgUrl="/static/img/seedpy.jpeg" />,
//   document.querySelector('#seedpy'),
// );

// ReactDOM.render(
//   <TradingCard name="Fuzzums" skill="being the ultimate world ruler!" imgUrl="/static/img/polymorphism.jpeg" />,
//   document.querySelector('#fuzzums'),
// );


const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Fuzzums",
    skill: "world conquerer",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];
console.log("*****************************************");
console.log("*****************************************");
console.log("*****************************************");
for (const currentCard of tradingCardData) {
  ReactDOM.render(
  <TradingCard name = currentCard.name skill="being the ultimate world ruler!" imgUrl="/static/img/polymorphism.jpeg" />,
  document.querySelector('#fuzzums'),
);

}
console.log("*****************************************");
console.log("*****************************************");
console.log("*****************************************");




// Where is static/js/tradingCard.jsx getting pulled into the webpage?
  //>> comes from cards.html, line 6 src.
  //

// How does each trading card get mounted into the DOM?
  //>>gets mounted from the query selector using the element tags from render method with props
  
// Why is there only one TradingCard component definition, while there are three trading cards on the page itself?
  //>> b/c it is a function component, and they need to call the function to do the same thing three times. 

// What are the props for each trading card? How are the props being rendered onto the page?
  //they are bringing the props attribute names from the render method with the designated values
