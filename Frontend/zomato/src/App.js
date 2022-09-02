import React from 'react';
import Header from './Components/Header';
import Hotal from '../src/hotel/HotalReg';
import {Routes,Route } from "react-router-dom";
import Addmenu from './menu/Addmenu';
import Hotalist from './hotel/Hotalist';
import Menulist from './menu/Menulist';

function App() {
  return (
    <>
    <Header />
        <Routes>
              <Route path="/hotalregistration" element={<Hotal />} />
              <Route path="/hotalist" element={<Hotalist />} />
              <Route path="/menuitem" element={<Addmenu />} />
              <Route path="/menlist" element={<Menulist />} />
        </Routes>
        </>
  );
}

export default App;
