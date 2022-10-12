import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';


const data = {
  num: "1234 5678 8765 4321",
  cardholder: "Thili Rabi",
  bank: "Big Bank, Inc.",
  expiry: "08/19",
}
const acc2 = {
  num: "123 4325 2345 1234",
  cardholder: "Kirk Rabi",
  bank: "KM Bank, Inc.",
  expiry: "22/27",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card cardInfo={data} />
    <Card cardInfo={acc2} />
  </React.StrictMode>,
);