import Homepage from "./Pages/Homepage"
import Aboutpage from "./Pages/Aboutpage"
import Projectpage from "./Pages/Projectpage"
import Contactpage from "./Pages/Contactpage"
import Timelinepage from "./Pages/Timelinepage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Bitcube from "./Components/Bitcube"


function App() {

  return (
    <div>
      <Navbar/>
      <section id="Home"><Homepage/></section>
      <section id="Aboutpage"><Aboutpage/></section>
      <section id="Timelinepage"><Timelinepage/><Bitcube/></section>
      <section id="Project"><Projectpage/></section>
      <section id="Contact"><Contactpage/></section>
      <Footer/>
    </div>
  )
}

export default App
