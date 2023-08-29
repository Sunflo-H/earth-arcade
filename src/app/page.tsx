"use client";
import Header from "@/components/header/header";
import GameScreen from "@/components/main/GameScreen";
import GameSetting from "@/components/main/GameSetting";
import { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  const [isGameStart, setIsGameStart] = useState<number>(0);

  return (
    <>
      <Header />
      <main className="">
        <Provider store={store}>
          {isGameStart ? (
            <GameScreen />
          ) : (
            <GameSetting setIsGameStart={setIsGameStart} />
          )}
        </Provider>
      </main>
    </>
  );
}
