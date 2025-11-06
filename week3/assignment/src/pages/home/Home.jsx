import React from "react";
import Header from "../../shared/components/header/Header";
import * as styles from "./Home.css";
import Game from "../game/Game";
import { useState } from "react";
import Ranking from "../ranking/Ranking";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('Game');

  const handleSelectPage = (page) => {
    if (page === 'Game') {
        setSelectedPage('Game')
    } else {
        setSelectedPage('Ranking');
    }
  }

  return (
    <div className={styles.container}>
      <Header onSelectPage={handleSelectPage}/>
      {selectedPage === 'Game' ? <Game /> : <Ranking />}
    </div>
  );
};

export default Home;
