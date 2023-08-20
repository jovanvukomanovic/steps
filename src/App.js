import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousClick() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNextClick() {
    if (step < 3) setStep((prev) => prev + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          {/* <p className="message">Step: {messages[step - 1]}</p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          {/* <StepMessage step={"magnificent"}>
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onHandleClick={() => {
                  alert(`your alerted message is here ${step + 1}`);
                }}
              >
                push the button
              </Button>
            </div>
          </StepMessage> */}

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onHandleClick={handlePreviousClick}
            >
              <span>👈</span>
              Previus
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onHandleClick={handleNextClick}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}

function Button({ onHandleClick, bgColor, textColor, children }) {
  return (
    <button
      onClick={() => onHandleClick()}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
