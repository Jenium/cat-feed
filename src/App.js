import { useState } from 'react';
import './App.css';

import { INFO } from './mock';
import { Card } from './components';

function App() {
  const [activeCards, setActiveCards] = useState([]);

  const handleClick = (id) => {
    if (activeCards.includes(id)) {
      setActiveCards(activeCards.filter(activeCardId => activeCardId !== id));
    } else {
      setActiveCards([...activeCards, id]);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          Ты сегодня покормил кота?
        </header>

        <main className="products">

          {INFO.map((props) => (
            <Card key={props.id} {...props}
              selected={Boolean(activeCards.includes(props.id))}
              onClick={() => handleClick(props.id)}
            />
          ))}

        </main>
      </div>
    </div>
  );
}

export default App;
