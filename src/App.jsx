
import ArchiveLeft from "./Components/ArchiveLeft"
import ArchiveRight from "./Components/ArchiveRight"
import Blog from "./Components/Blog"
import Case from "./Components/Case"
import Client from "./Components/Client"
import ContactLeft from "./Components/ContactLeft"
import ContectRight from "./Components/ContectRight"
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HeroSec from "./Components/HeroSec"
import SarviceLeft from "./Components/SarviceLeft"
import ServiceRight from "./Components/ServiceRight"
import Services from "./Components/Services"
import Trust from "./Components/Trust"

const App = () => {
  return (
    <div>
        <Header />
        <Services/>
        <HeroSec right={<ArchiveRight/>} left={<ArchiveLeft/>}/>
        <Case/>
        <HeroSec right={<ServiceRight/>} left={<SarviceLeft/>}/>
        <Trust/>
        <Blog/>
        <Client/>
        <Faq/>
        <HeroSec left={<ContactLeft/>} right={<ContectRight/>}/>
        <Footer/>
    </div>
  )
}

export default App