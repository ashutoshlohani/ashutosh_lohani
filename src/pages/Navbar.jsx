import { useEffect } from 'react';
import code from '../assets/icons/code.svg';
import { MagneticButton } from '../components/button';

function Navbar() {
   useEffect(() => {
      const handleSmoothScroll = event => {
         event.preventDefault();
         const targetId = event.target.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);

         if (targetElement) {
            window.scrollTo({
               top: targetElement.offsetTop + 50,
               behavior: 'smooth',
            });
         }
      };

      const links = document.querySelectorAll('nav a');
      links.forEach(link => {
         link.addEventListener('click', handleSmoothScroll);
      });

      return () => {
         links.forEach(link => {
            link.removeEventListener('click', handleSmoothScroll);
         });
      };
   }, []);

   const navLinks = [
      { href: '/about', text: 'About' },
      { href: '/projects', text: 'Projects' },
      { href: '/contact', text: 'Contact' },
   ];

   return (
      <header>
         <nav className='mx-6 sm:mx-14 lg:mx-28 '>
            <div className='flex flex-wrap items-center justify-between font-normal font-size pt-8'>
               <div className='group flex cursor-pointer items-center'>
                  <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
                     <img src={code} alt='react icon' width={'100%'} height={'100%'} />
                  </div>

                  <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
                     <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
                        Code by
                     </h5>
                     <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-[4.2rem]'>
                        Ashutosh
                     </h5>
                     <h5 className='absolute left-48 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-28'>
                        Lohani
                     </h5>
                  </div>
               </div>

               <div className='hidden w-full md:block md:w-auto'>
                  <div className='flex gap-12'>
                     {navLinks.map(link => (
                        <MagneticButton key={link.href}>
                           <a href={link.href} className='font-normal hover:font-medium'>
                              {link.text}
                           </a>
                        </MagneticButton>
                     ))}
                  </div>
               </div>

               <div className='md:hidden'>
                  <a href='/contact'>Chat</a>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
