"use client";
import Header from "@/components/header/header";
import GameInitializer from "@/components/main/gameInitializer/GameInitializer";
import { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import Quiz from "@/components/main/quiz/Quiz";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const [isGameStart, setIsGameStart] = useState<number>(0);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="">
          <Provider store={store}>
            {isGameStart ? (
              <Quiz />
            ) : (
              <GameInitializer setIsGameStart={setIsGameStart} />
            )}
          </Provider>
        </main>
      </QueryClientProvider>
    </>
  );
}
