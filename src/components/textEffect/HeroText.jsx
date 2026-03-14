import React, { useCallback, useEffect, useRef } from 'react';
import { useScramble } from 'use-scramble';

const heroWordsCSS = `
@keyframes cycle {
  0%   { opacity: 1; }
  14%  { opacity: 1; }
  19%  { opacity: 0; }
  100% { opacity: 0; }
}

.hero-word-wrap {
  position: relative;
  display: inline-block;
  min-width: 8ch;
}

.hero-words-strut {
  display: inline;
  user-select: none;
  pointer-events: none;
  font-size: inherit;
  line-height: inherit;
}

.hero-words {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.2em;
}

.hero-words span {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  line-height: inherit;
}

.hero-words span:nth-child(1) { animation: cycle 7s linear infinite 0s; }
.hero-words span:nth-child(2) { animation: cycle 7s linear infinite 1s; }
.hero-words span:nth-child(3) { animation: cycle 7s linear infinite 2s; }
.hero-words span:nth-child(4) { animation: cycle 7s linear infinite 3s; }
.hero-words span:nth-child(5) { animation: cycle 7s linear infinite 4s; }
.hero-words span:nth-child(6) { animation: cycle 7s linear infinite 5s; }
.hero-words span:nth-child(7) { animation: cycle 7s linear infinite 6s; }
`;

const ROTATING_WORDS = ['Beauty.', 'Magic.', 'Reality.', 'Stories.', 'Dreams.', 'Motion.', 'Impact.'];

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
      spansRef.current = Array.from(document.querySelectorAll('.var-fw'));
   }, []);

   const handleMouseMove = useCallback(e => {
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
   }, []);

   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
   }, [handleMouseMove]);

   return (
      <>
         <style>{heroWordsCSS}</style>
         <div className='leading-none sm:leading-[5rem] flex flex-col items-start text-light cursor-default'>

            {/* "Frontend Developer" */}
            <div className='font-semibold md:font-medium lg:font-light text-[64px] lg:text-[80px] xl:text-[110px]'>
               {['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '\u00A0'].map((char, index) => (
                  <span className='var-fw' key={index}>{char}</span>
               ))}
               <br className='sm:hidden' />
               {['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].map((char, index) => (
                  <span className='var-fw' key={index + 10}>{char}</span>
               ))}
            </div>

            {/* "Turning Binary / Into <word>" */}
            <h1 className='font-light md:font-medium lg:font-light text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.9rem] text-left'>

               <span className='block leading-snug'>
                  {['T', 'u', 'r', 'n', 'i', 'n', 'g', '\u00A0'].map((char, index) => (
                     <span className='var-fw' key={index}>{char}</span>
                  ))}
                  <span
                     className='var-fw leading-snug'
                     ref={ref}
                     onMouseOver={replay}
                     onFocus={replay}
                  />
               </span>


               <span className='flex items-baseline'>
                  {['I', 'n', 't', 'o', '\u00A0'].map((char, index) => (
                     <span className='var-fw' key={index}>{char}</span>
                  ))}
                  <span className='hero-word-wrap'>
                     {/* Invisible strut — gives this wrapper a real text baseline */}
                     <span className='hero-words-strut' aria-hidden='true'>&#8203;</span>
                     <span className='hero-words'>
                        {ROTATING_WORDS.map((word, index) => (
                           <span key={index} className='var-fw text-accent-secondary'>
                              {word}
                           </span>
                        ))}
                     </span>
                  </span>
               </span>

            </h1>
         </div>
      </>
   );
});

HeroText.displayName = 'Frontend Developer Turning Binary Into Beauty.';
export default HeroText;