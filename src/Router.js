import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Xettuyen from "./pages/Xettuyen";
import Nhomnganh from "./pages/Nhomnganh";
import Quocte from "./pages/Quocte";
import Ctnganh from "./pages/Ctnganh";
//import Dbcl from "./pages/Dbcl";
import Toggle from "./layout/Toggle";


function Router() {
  return (
    <div className="w-full h-full absolute">
      <nav className="w-full rounded-t-2xl opacity-80 flex justify-between
      mobile:text-base tablet:text-lg laptop:text-xl desktop:text-xl
      mobile:h-10 tablet:h-11 laptop:h-11 desktop:h-11
      bg-yellow-400 text-black dark:bg-neutral-700 dark:text-white
      ">
        <ul className="flex items-center font-semibold ml-4">
          <li className="p-2 hover:rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black         
          ">
            <Link to="/">
               Home
            </Link>
          </li>
          <li className="p-2 hover:rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
          ">
            <Link to="/xettuyen">PTXT</Link>
          </li>
          <li className="p-2 hover:rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
          ">
            <Link to="/nhomnganh">Ngành</Link>
          </li>
          <li className="p-2 hover:rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
          ">
            <Link to="/quocte">QT</Link>
          </li>
          <li className="p-2 hover:rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
          ">
            <Link to="/ctnganh">GTN</Link>
          </li>
          </ul>
          <ul className="flex items-center font-semibold mr-4">
          <li className="">
            <Toggle />
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xettuyen" element={<Xettuyen />} />
          <Route path="/nhomnganh" element={<Nhomnganh />} />
          <Route path="/quocte" element={<Quocte />} />
          <Route path="/ctnganh" element={<Ctnganh />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
