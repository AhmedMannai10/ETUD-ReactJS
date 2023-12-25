import { useState } from "react";
import Header from "./components/Header.tsx";

const Home = function() {
  const [nav, setNav] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center pt-14">
      <Header />
    </main>
  );
}

export default Home;
