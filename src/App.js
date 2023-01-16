import { Route, Routes } from "react-router-dom"
import Login from "./sayfalar/Auth/Login"
import HeaderHome from "./Components/HeaderHome"
import HomePage from "./frontend/anasayfa/HomePage"
import CustomOrderX from "./frontend/modelx/CustomOrderX"
import CustomOrderY from "./frontend/modely/CustomOrderY"
import CustomOrderS from "./frontend/modelss/CustomOrderS"
import CustomOrder3 from "./frontend/model3/CustomOrder3"
import ModelSCar from "./frontend/modelss/ModelSCar"
import ModelXCar from "./frontend/modelx/ModelXCar"
import ModelYCar from "./frontend/modely/ModelYCar"
import Model3Car from "./frontend/model3/Model3Car"
import SolarPanel from "./frontend/solarpanel/SolarPanel"
import SolarRoof from "./frontend/solarroof/SolarRoof"
import ExistingInventoroy from "./frontend/existingInventoroy/ExistingInventoroy"
import Header from "./sayfalar/layout/Header"
import AnaSayfa from "./sayfalar/AnaSayfa/AnaSayfa"
import ModelS from "./sayfalar/Arabalar/model-s/ModelS"
import ModelSAdd from "./sayfalar/Arabalar/model-s/ModelSAdd"
import ModelSUpdate from "./sayfalar/Arabalar/model-s/ModelSUpdate"
import Model3 from "./sayfalar/Arabalar/model-3/Model3"
import Model3Add from "./sayfalar/Arabalar/model-3/Model3Add"
import Model3Update from "./sayfalar/Arabalar/model-3/Model3Update"
import ModelX from "./sayfalar/Arabalar/model-x/ModelX"
import ModelXAdd from "./sayfalar/Arabalar/model-x/ModelXAdd"
import ModelXUpdate from "./sayfalar/Arabalar/model-x/ModelXUpdate"
import ModelY from "./sayfalar/Arabalar/model-y/ModelY"
import ModelYAdd from "./sayfalar/Arabalar/model-y/ModelYAdd"
import ModelYUpdate from "./sayfalar/Arabalar/model-y/ModelYUpdate"
import SolarRoofs from "./sayfalar/SolarRoof/SolarRoofs"
import SolarRoofsAdd from "./sayfalar/SolarRoof/SolarRoofsAdd"
import SolarRoofsUpdate from "./sayfalar/SolarRoof/SolarRoofsUpdate"
import SolarPanels from "./sayfalar/SolarPanel/SolarPanels"
import SolarPanelsAdd from "./sayfalar/SolarPanel/SolarPanelsAdd"
import SolarPanelsUpdate from "./sayfalar/SolarPanel/SolarPanelsUpdate"
import './assets/scss/themes.scss';

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/customeorderx" element={<CustomOrderX />}/>
      <Route path="/customeordery" element={<CustomOrderY />}/>
      <Route path="/customeorders" element={<CustomOrderS />}/>
      <Route path="/customeorder3" element={<CustomOrder3 />}/>
      <Route path="/" element={<HeaderHome />}>
      <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/models-car"
          element={<ModelSCar/>}
        />
         <Route
          path="/modelx-car"
          element={<ModelXCar/>}
        />
         <Route
          path="/model3-car"
          element={<Model3Car/>}
        />
        <Route
          path="/modely-car"
          element={<ModelYCar/>}
        />
         <Route
          path="/solarroof"
          element={<SolarRoof/>}
        />
         <Route
          path="/solarpanel"
          element={<SolarPanel/>}
        />
      </Route>
      
      <Route
          path="/existing-inventoroy"
          element={<ExistingInventoroy/>}
        />
        <Route path="/admin" element={<Header />}>
           {/* ana sayfa Route */}
           <Route
          path="/admin"
          element={<AnaSayfa />}
        />
          {/* model-s Route */}
          <Route
          path="/admin/model-s"
          element={<ModelS />}
        />
        <Route
          path="/admin/model-s-add"
          element={<ModelSAdd />}
        />
        <Route
          path="/admin/model-s-update/:id"
          element={<ModelSUpdate />}
        />
        {/* model-3 Route */}
        <Route
          path="/admin/model-3"
          element={<Model3 />}
        />
        <Route
          path="/admin/model-3-add"
          element={<Model3Add />}
        />
        <Route
          path="/admin/model-3-update/:id"
          element={<Model3Update />}
        />
        {/* model-x Route */}

        <Route
          path="/admin/model-x"
          element={<ModelX />}
        />
        <Route
          path="/admin/model-x-add"
          element={<ModelXAdd />}
        />
        <Route
          path="/admin/model-x-update/:id"
          element={<ModelXUpdate />}
        />
        {/* model-y Route */}

        <Route
          path="/admin/model-y"
          element={<ModelY />}
        />
        <Route
          path="/admin/model-y-add"
          element={<ModelYAdd />}
        />
        <Route
          path="/admin/model-y-update/:id"
          element={<ModelYUpdate />}
        />
         <Route
          path="/admin/solar-roof"
          element={<SolarRoofs />}
        />
        <Route
          path="/admin/solar-roof-add"
          element={<SolarRoofsAdd />}
        />
        <Route
          path="/admin/solar-roof-update/:id"
          element={<SolarRoofsUpdate />}
        />
          <Route
          path="/admin/solar-panel"
          element={<SolarPanels />}
        />
        <Route
          path="/admin/solar-panel-add"
          element={<SolarPanelsAdd />}
        />
        <Route
          path="/admin/solar-panel-update/:id"
          element={<SolarPanelsUpdate />}
        />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
