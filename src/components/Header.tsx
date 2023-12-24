import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleRouteChange = (location: string) => {
    navigate(location);
    setNav(false);
  }

  return (
    <>
      <div className="sticky top-0 backdrop-blur-sm flex items-center flex-row-reverse w-screen border-gray-300 dark:border-gray-600 border-b h-14 ">
        {nav ?
          <button type="button" className="w-fit h-fit  
        flex-col justify-center items-center p-2  " onClick={() => setNav(!nav)}>
            <span className="flex w-5 h-0.5 dark:bg-text-100 bg-text-light my-1.5 rounded-full rotate-45 translate-y-1 transition-transform" />
            <span className="flex w-5 h-0.5 dark:bg-text-100 bg-text-light my-1.5 rounded-full -rotate-45 -translate-y-1 transition-transform" />
          </button>
          :
          <button type="button" className=" w-fit h-fit  
        flex-col justify-center items-center p-2  " onClick={() => setNav(!nav)}>
            <span className="flex w-5 h-0.5 dark:bg-text-100 bg-text-light  my-1.5 rounded-full transition-transform " />
            <span className="flex w-5 h-0.5 dark:bg-text-100 bg-text-light my-1.5 rounded-full transition-transform" />

          </button>
        }
      </div>

      {nav &&
        <div className="fixed  flex justify-center w-full bottom-0 top-16 ">
          <div className=" backdrop-blur-xl flex  flex-col justify-center items-start h-fit gap-2
            w-full mx-6 border p-10 rounded-lg max-w-md min-w-sm " >
            <button onClick={() => handleRouteChange("/")} type="button" className=" text-text-secondary-light dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark">
              Home
            </button>

            <button onClick={() => handleRouteChange("/courses")} type="button" className="text-text-secondary-light  dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark">
              Courses
            </button>
            <button onClick={() => handleRouteChange("/")} type="button" className=" text-text-secondary-light dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark">
              My Courses
            </button>
            <button onClick={() => handleRouteChange("/profile")} type="button" className=" text-text-secondary-light dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark">
              Profile
            </button>
          </div>
        </div>}




    </>
  );

}
