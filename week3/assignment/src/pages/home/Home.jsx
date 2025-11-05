import React from "react";
import Header from "../../shared/components/header/Header";
import * as styles from "./Home.css";
import Game from "../game/Game";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Game />
    </div>
  );
};

export default Home;
