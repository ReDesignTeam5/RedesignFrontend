import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LevelBg from "../LevelBg";
import level3 from "../../level3";
import NextButton from "../NextButton";
import VendingMachine from "../../assets/level3img/VendingMachine.svg";
import PlasticBag from "../../assets/level3img/PlasticBag.svg";
import Boy from "../../assets/Boy.svg";

function Level3Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const navigate = useNavigate();
  const { image, price, answer } = level3[activeQuestion];
  const [newPage, setNewPage] = useState(false);
  const [levelStart, setLevelStart] = useState(false);
  const onClickFirst = () => {
    setNewPage(true);
  };
  const onClickSecond = () => {
    setLevelStart(true);
  };
  function onClickNext() {
    if (activeQuestion !== level3.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  }
  function correct() {
    setResult((result) => result + 1);
  }

  return (
    <div>
      {!levelStart ? (
        <div>
          {!newPage ? (
            <div className="lvl3-bg">
              <div className="body-container">
                <div className="level-title" style={{ top: "100px" }}>
                  Level 3
                </div>
                <div
                  style={{
                    width: "100vw",
                    backgroundColor: "#BEB5B5",
                    position: "absolute",
                    height: "30%",
                    bottom: "0%",
                  }}
                ></div>{" "}
                <img
                  style={{ width: "90%", top: "20%", position: "absolute" }}
                  src={VendingMachine}
                  alt="Vending Machine"
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "300px",
                  left: "3%",
                  bottom: "2%",
                }}
                src={Boy}
                alt="Boy"
              />
              <NextButton click={onClickFirst} />
            </div>
          ) : (
            <div>
              <LevelBg bg="lvl3-bg" lvlnum="3" />
              <div className="body-container">
                <div
                  className="body-text"
                  style={{ fontSize: "60px", width: "65%", top: "25%" }}
                >
                  Hi (name)! I need your help to buy some food from the vending
                  machine!
                </div>
                <img
                  style={{ width: "500px", top: "50%", position: "absolute" }}
                  src={PlasticBag}
                  alt="Plastic Bag"
                />
              </div>
              <NextButton click = {onClickSecond} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <LevelBg bg="lvl3-bg" lvlnum="3" />
          {!showResult ? (
            <div>
              <div className="body-container">
                <div className="body-text" id="l3-body-text">
                  Please insert the correct amount into the dino-bank:
                </div>
                <img
                  className="l3-item-img"
                  src={require("../../assets/level3img/" + image + ".svg")}
                  alt="item"
                />
                <div className="body-text" id="l3-price">
                  {price}
                </div>
                <button className="btn-temp1" onClick={correct}>
                  Correct
                </button>
                <button className="btn-temp2">Wrong</button>
              </div>
              <NextButton click={onClickNext} />
            </div>
          ) : (
            navigate("/ScorePage", { state: { score: result, level: 3 } })
          )}
        </div>
      )}
    </div>
  );
}

export default Level3Quiz;