import HeroText from '../components/textEffect/HeroText';
import { BackgroundBeams } from '../components/ui/background-beams';
import Navbar from './Navbar';

const Hero = () => {
   return (
      <section className='h-[80vh] md:h-screen bg-dark text-light relative antialiased' id='/'>
         <BackgroundBeams />
         <Navbar />
         <div className='mix-blend-difference flex items-center justify-start h-full mx-6 sm:mx-14 lg:mx-28'>
            <HeroText />
         </div>
      </section>
   );
};

export default Hero;
