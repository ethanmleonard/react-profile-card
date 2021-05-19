// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ProfileImg from './images/profilecrop.jpg';
import heart from './images/small-heart.png'
import linkedin from './images/linkedin-icon.png'
import github from './images/github.png'


function App() {

  let [titleState, setTitleState] = useState({
    title: 'My Name is Ethan',
  });

  const [count, setCount] = useState(0);


  return (
    <div className="border">
    <div className="container">
      <div className="profile">
        <img src={ProfileImg} alt=""/>
      </div>
      <div className="main-text">
        <h1>Hi!</h1>
        <h3>{titleState.title}</h3>
      </div>
      <div className="buttons">
        <div id="name">
          <button 
            onClick={() => setTitleState({title: "My Name is Ethan"})}
          >
            Name
          </button>
        </div>
        <div id="skills">
          <button 
            onClick={
              () => setTitleState({title: "I'm a Frontend Developer"})
            }
          >
            Skills
          </button>
        </div>
        
      </div>
      <div className="like-counter" >
        <p>{count}</p>
      <img src={heart} alt="" onClick={() => setCount(count + 1)}/>
      </div>
      
      <div className="socials">
      <a href="https://www.linkedin.com/in/ethan-leonard-850042169/"><img src={linkedin}/></a>
      <a href="https://github.com/ethanmleonard"><img src={github}/></a>
      </div>
    </div>
  </div>
  );
}

export default App;