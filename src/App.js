import "./App.css";
import { useState } from "react";
function App() {
  const names = [
    {
      user: "Advait",
      pic: "https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png",
    },
    {
      user: "ramen",
      pic: "https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22-500x500.jpg",
    },
    {
      user: "takoyaki",
      pic: "https://image.shutterstock.com/image-photo/takoyaki-traditional-japanese-dish-sprinkled-260nw-1169217397.jpg",
    },
  ];

  return (
    <div className="App">
      {names.map(({ user, pic }) => (
        <Msg name={user} pic={pic} />
      ))}
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <img src={pic} className="Profile-pic" alt="dp" />
      <h1 className="hello-world">Hello, {name} 🧨🎇✨</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  // let like = 10;
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  return (
    <div className="counter-container">
      {like === 10 ? <h3>You won the hearts 👍🎉✨🎇</h3> : null}
      <progress
        className="counter-progress"
        value={(like / (like + dislike)) * 100}
        max="100"
      ></progress>

      <div className="counter-button-container">
        <button
          onClick={() => {
            setlike(like + 1);
          }}
        >
          👍 {like}
        </button>

        <button
          onClick={() => {
            setdislike(dislike + 1);
          }}
        >
          👎 {dislike}
        </button>
      </div>
    </div>
  );
}

export default App;
