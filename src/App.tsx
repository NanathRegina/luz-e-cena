import Banner from "./components/banner"
import Footer from "./components/footer"
import Header from "./components/header"
import MovieSection from "./components/movieSection"
import Newsletter from "./components/newsletter"

function App() {

  return (
    <>
      <Header/>
      <Banner src="/banners/banner_inicial.png" alt="Banner" />
      <MovieSection/> 
      <Banner src="/banners/banner_combo.png" alt="Banner combo pipoca" />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
