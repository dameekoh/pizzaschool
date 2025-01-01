import Person from './components/Person';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [letter, setLetter] = useState('B');

  function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Tập hợp ký tự
    const randomIndex = Math.floor(Math.random() * characters.length); // Lấy chỉ số ngẫu nhiên
    return characters[randomIndex]; // Trả về ký tự tại chỉ số ngẫu nhiên
  }

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <p>{letter}</p>
      <button
        onClick={() =>
          setLetter((prevLetter) => prevLetter + getRandomCharacter())
        }
      >
        Add letter
      </button>
    </div>
  );
};

export default App;
