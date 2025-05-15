import './App.css'

import Slider from "./components/slider/slider.jsx";
import {MainHead} from "./components/main_head/head.jsx";
import {Preferens} from "./components/preferens/preferens.jsx";

function App() {


  return(
      <section className="wrapper">
          <Slider />

          <div className="content">
              <MainHead/>
              <Preferens/>
          </div>
      </section>
  )
}

export default App
