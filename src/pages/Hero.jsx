import HeroText from '../components/textEffect/HeroText';
import Navbar from './Navbar';

const Hero = () => {
   return (
      <section className='h-[80vh] md:h-screen bg-light text-dark relative' id='/'>
         <Navbar />
         <div className=' flex items-center justify-start h-full mx-6 sm:mx-14 lg:mx-28'>
            <HeroText />
         </div>
      </section>
   );
};

export default Hero;
