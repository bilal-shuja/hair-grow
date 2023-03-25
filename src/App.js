import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import LandingPage from './Components/Layout/LandingPage.jsx';
import Navbar from './Components/Layout/Navbar.jsx';
import Footer from './Components/Layout/Footer.jsx';
import AboutUs from './Components/Sections/AboutUs.jsx';
import Services from './Components/Sections/Services.jsx';
import ContactUs from './Components/Sections/ContactUs.jsx';

import HairTransDiagnose from './Components/Procedures/HTransDiagnose.jsx';
import HTransProcedure from './Components/Procedures/HTransProcedure.jsx';
import BHairTranSurgery from './Components/Procedures/BHairTransSurgery.jsx';
import AhairTranSurgery from './Components/Procedures/AHairTransSurgery.jsx';
import CostHTransplant from './Components/Procedures/CostHTransplant.jsx';
import SMP from './Components/Procedures/SMP.jsx';

import FUEFUT from './Components/Procedures/FUEFUT.jsx';


import FUT from './Components/Packages/FUT.jsx';
import FUE from './Components/Packages/FUE.jsx';
import UnshaveFue from './Components/Packages/UnshavenFUE.jsx';
import CHairTrans from './Components/Packages/CroHairTrans.jsx';
import BeardTrans from './Components/Packages/BeardTrans.jsx';

import EyeBrowTrans from './Components/Packages/EyeBrowTrans.jsx';
import HTransInWomen from './Components/Packages/HTransInWomen.jsx';
import HTransRepair from './Components/Packages/HTransRepair.jsx';
import FUTScarRevision from './Components/Packages/FUTScarRevision.jsx';

import RoboticHairTransplant from './Components/Packages/RoboHTrans.jsx';
import HairClonnNewAdv from './Components/Packages/HClonnNewAdv.jsx';
import './App.css';

function App() {
  return (
    <div>
      

      <Router>
           <Navbar/>
           <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="/AboutUs" element={<AboutUs/>}/>
           <Route path="/Services" element={<Services/>}/>
           <Route path="/ContactUs" element={<ContactUs/>}/>

           <Route path="/HairTransDiagnose" element={<HairTransDiagnose/>}/>

          <Route path="/FUEFUT" element={<FUEFUT/>}/>
          <Route path="/HTransProcedure" element={<HTransProcedure/>}/>
          <Route path="/BHairTranSurgery" element={<BHairTranSurgery/>}/>
          <Route path="/AhairTranSurgery" element={<AhairTranSurgery/>}/>
          <Route path="/CostHTransplant" element={<CostHTransplant/>}/>
          <Route path="/SMP" element={<SMP/>}/>

          <Route path="/FUT"  element={<FUT/>}/>
          <Route path="/FUE"  element={<FUE/>}/>
          <Route path="/UnshaveFue"  element={<UnshaveFue/>}/>
          <Route path="/CrownHairTransplant"  element={<CHairTrans/>}/>
          <Route path="/BeardTransplant"  element={<BeardTrans/>}/>
          <Route path="/EyeBrowTranspkant"  element={<EyeBrowTrans/>}/>
          <Route path="/HairTransplantInWomen"  element={<HTransInWomen/>}/>
          <Route path="/HairTransplantRepair"  element={<HTransRepair/>}/>
          <Route path="/FUTScarRevision"  element={<FUTScarRevision/>}/>

          <Route path="/HairTransplantRepair"  element={<HTransRepair/>}/>
          <Route path="/FUTScarRevision"  element={<FUTScarRevision/>}/>

          <Route path="/RoboticHairTransplant"  element={<RoboticHairTransplant/>}/>
          <Route path="/RoboticHairTransplant"  element={<RoboticHairTransplant/>}/>
          <Route path="/HairClonningNewAdvancements"  element={<HairClonnNewAdv/>}/>

          
          
           </Routes>
           <Footer/>
           
           </Router>
    </div>
  );
}

export default App;
