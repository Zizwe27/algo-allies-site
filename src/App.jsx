import Header from '../components/header.jsx'
import Carousel from '../components/Carousel.jsx'
import About from '../components/About.jsx'
import Resume from '../components/Resume.jsx'
import Interviews from '../components/Interviews.jsx'
import Mock from '../components/Mock.jsx'
import Footer from '../components/Footer.jsx'

function App() {
   return ( 
      <div>
         <Header />
         <Carousel />
         <About />
         <Resume />
         <Interviews />
         <Mock />
         <Footer />
      </div>
   );
}

export default App
