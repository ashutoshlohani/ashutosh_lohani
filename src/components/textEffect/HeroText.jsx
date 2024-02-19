import React, { useEffect, useRef } from 'react';
import { useScramble } from 'use-scramble';

const HeroText = React.memo(() => {
   const spansRef = useRef([]);
   const PROXIMITY_THRESHOLD = 344;

   const { ref, replay } = useScramble({
      overdrive: false,
      overflow: true,
      range: [48, 49],
      scramble: 30,
      speed: 0.2,
      text: `Binary`,
      tick: 1,
      step: 10,
   });

   useEffect(() => {
      spansRef.current = document.querySelectorAll('span');
   }, []);

   const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      spansRef.current.forEach(span => {
         const rect = span.getBoundingClientRect();
         const spanX = rect.x + rect.width / 2;
         const spanY = rect.y + rect.height / 2;

         const distance = Math.sqrt((mouseX - spanX) ** 2 + (mouseY - spanY) ** 2);

         const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2;
         const fontWeight =
            200 + (900 / maxDistance) * (maxDistance - Math.min(distance, PROXIMITY_THRESHOLD));

         span.style.fontWeight = fontWeight.toFixed(0);
      });
   };

   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <>
         <div className='leading-none sm:leading-[5rem] flex flex-col items-start sm:items-start text-dark cursor-default'>
            <div className='font-semibold md:font-medium lg:font-light text-[64px] lg:text-[80px] xl:text-[110px] '>
               {['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '\u00A0'].map((char, index) => (
                  <span key={index}>{char}</span>
               ))}

               <br className='sm:hidden' />

               {['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].map((char, index) => (
                  <span key={index + 10}>{char}</span>
               ))}
            </div>

            <h1 className='font-light md:font-medium lg:font-light text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.9rem] text-left sm:text-left'>
               <p className='leading-snug'>
                  {['T', 'u', 'r', 'n', 'i', 'n', 'g', '\u00A0'].map((char, index) => (
                     <span key={index}>{char}</span>
                  ))}
                  <span ref={ref} onMouseOver={replay} onFocus={replay} className='leading-snug' />
               </p>

               <p>
                  {['I', 'n', 't', 'o', '\u00A0', 'B', 'e', 'a', 'u', 't', 'y', '.'].map(
                     (char, index) => (
                        <span key={index}>{char}</span>
                     )
                  )}
               </p>
            </h1>
         </div>
      </>
   );
});

HeroText.displayName = 'Frontend Developer Turning Binary Into Beauty.';
export default HeroText;
