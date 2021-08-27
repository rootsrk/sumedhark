import React, { useState, useEffect } from "react";
import './App.css';

type Props = {
  textToType: string; delay: number; loop: boolean;
}

const desc = "Hi! I am Sumedha, a web developer based out of Bangalore, India."

function TypingComponent({ textToType, delay, loop }: Props) {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < textToType.length) {
      setTimeout(() => {
        setText(text + textToType[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
    }
    else if (loop) {
      setText("");
      setCurrentIndex(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  return <div>{text}<span className="blink">|</span></div>;
}


function App() {


  return (
    <div className="App">
      <video width="100vw" height="100vh" autoPlay loop>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="line app-content">
          <TypingComponent textToType={desc} delay={100} loop={false} />
        </div>
      </div>

    </div>
  );
}

export default App;
