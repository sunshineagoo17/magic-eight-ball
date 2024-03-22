import React, { useState } from "react";
import CrystalBall from "./assets/images/magic-eight-ball.jpg";
import "./App.scss";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Heck yeah!",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  const askQuestion = (e) => {
    e.preventDefault(); // Prevent form submission if Enter is pressed
    if (question !== "") {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setAnswer(answers[randomIndex]);
      setQuestion(""); // Optional: Clear question after asking
      setShakeAnimation(true); // Trigger the shake animation
      setTimeout(() => setShakeAnimation(false), 500); // Reset shake animation after 500ms
    } else {
      alert("Please ask a question!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      askQuestion(e);
    }
  };

  return (
    <div className="App">
      <img
        src={CrystalBall}
        alt="fortune teller with pug dog"
        className={shakeAnimation ? "App__fortune-teller shake" : "App__fortune-teller"}
      />
      <div className="App__magic-ball-container">
        <h1 className="App__title">Magic 8 Ball</h1>
        <form onSubmit={askQuestion}>
          <input
            type="text"
            className="App__input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask any question..."
          />
          <button
            id="ask-button"
            type="submit"
            aria-label="Submit"
            className="App__button"
            onClick={() => setShakeAnimation(true)} // Trigger the shake animation on button click
          >
            Ask
          </button>
        </form>
        <p className="App__answer">{answer}</p>
      </div>
    </div>
  );
}

export default App;
