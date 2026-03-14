import { lazy, Suspense } from 'react';
import HeroText from '../components/textEffect/HeroText';
import Navbar from './Navbar';

// ✅ Defer BackgroundBeams — it's decoration, not content
const BackgroundBeams = lazy(() =>
   import('../components/ui/background-beams').then(m => ({ default: m.BackgroundBeams }))
);

const Hero = () => {
   return (
      <section
         className='h-[80vh] md:h-screen bg-dark text-light relative antialiased'
         id='/'
      >
         {/* ✅ Loads AFTER text — browser paints text first */}
         <Suspense fallback={null}>
            <BackgroundBeams />
         </Suspense>

         <Navbar />

         {/* ✅ This is your LCP — renders immediately now */}
         <div className='mix-blend-difference flex items-center justify-start h-full mx-6 sm:mx-14 lg:mx-28'>
            <HeroText />
         </div>
      </section>
   );
};

export default Hero;