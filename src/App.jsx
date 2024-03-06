import { AnimatePresence } from 'framer-motion';
import { lazy, useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Loader from './components/loader/Loader';

const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const ServiceTools = lazy(() => import('./pages/ServiceTools'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./pages/Footer'));

function App() {
   const [isLoading, setLoading] = useState(true);
   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setLoading(false);
      }, 1600);

      return () => clearTimeout(timeoutId);
   }, []);

   return (
      <>
         <AnimatePresence mode='wait'>{isLoading && <Loader />}</AnimatePresence>
         <ParallaxProvider>
            <main>
               <Hero />
               <About />
               <ServiceTools />
               <Projects />
               <Contact />
               <Footer />
            </main>
         </ParallaxProvider>
      </>
   );
}

export default App;
