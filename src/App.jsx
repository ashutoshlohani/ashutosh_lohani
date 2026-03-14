import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

// ✅ Hero is EAGERLY imported — it's your LCP element
import Hero from './pages/Hero';

// ✅ Everything below the fold is lazy
const About = lazy(() => import('./pages/About'));
const ServiceTools = lazy(() => import('./pages/ServiceTools'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./pages/Footer'));

function App() {
   // ✅ Removed the 1600ms artificial delay entirely
   // If you want an intro animation, do it CSS-only inside Hero
   // A JS setTimeout blocking render = direct FCP penalty

   return (
      <AnimatePresence mode="wait">
         <main>
            {/* Hero renders immediately — no lazy, no Suspense */}
            <Hero />

            {/* Each section has its own Suspense — they load independently */}
            <Suspense fallback={null}>
               <About />
            </Suspense>
            <Suspense fallback={null}>
               <ServiceTools />
            </Suspense>
            <Suspense fallback={null}>
               <Projects />
            </Suspense>
            <Suspense fallback={null}>
               <Contact />
            </Suspense>
            <Suspense fallback={null}>
               <Footer />
            </Suspense>
         </main>
      </AnimatePresence>
   );
}

export default App;