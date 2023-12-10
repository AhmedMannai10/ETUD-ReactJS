import {useState} from "react";

const Home = function() {
  const [nav, setNav] = useState(false);
  return (

    <main className = " flex flex-col justify-center items-center min-h-screen">
      <div className="fixed left-5 top-5 space-y-1.5 border-2 border-transparent 
        hover:border-2 hover:border-gray-600 rounded-md 
        w-11 h-10 flex-col justify-center items-center pl-1  " onClick={() => setNav(!nav)}>
      <span className="flex w-5 h-0.5 bg-text-100 mt-2 "></span>
      <span className="flex w-8 h-0.5 bg-text-100"></span>
      <span className="flex w-8 h-0.5 bg-text-100"></span>
      </div>
    </main>

  ); 
}

export default Home;
