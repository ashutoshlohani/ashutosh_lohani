const About = () => {
   return (
      <section className='bg-dark text-light gap-10'>
         <div className='flex justify-end'>
            <p className='mix-blend-difference rotate-90 opacity-50 font-mono text-xs sm:text-sm xl:text-base'>
               {'/aa-shu-towsh/'}
            </p>
         </div>
         <div
            id='about'
            className='py-[5rem] lg:py-[10rem] flex flex-col-reverse sm:flex-row mx-6 sm:mx-14 lg:mx-28'>
            <div className='basis-1/2'>
               <div className='text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]'>
                  {`ヽ(•‿•)`} <p className='waving-hand'>{`ﾉ`}</p>
               </div>
               <h1 className='text-[2.5rem] lg:text-5xl xl:text-[4.5rem] leading-tight xl:leading-[1.15] mt-4 mb-8 lg:my-8'>
                  {`Hi, I'm Aashu`}
                  <br />
                  {`Nice To Meet You.`}
               </h1>

               <p className='font-light leading-relaxed font-size-two opacity-60'>
                  {`I'm a frontend developer based in Nainital, India. The space between development and design is where I thrive. I'm trying to build useful and usable things to put good into the world. I push myself to learn new tools, understand new patterns and principles, and keep growing as a developer. In the meantime, you'll find me doodling and watching anime.`}
               </p>
            </div>

            <div className='flex basis-1/2 justify-center items-start'>
               <div className='flex justify-center mb-10 sm:mb-0 sm:p-8 lg:p-0 h-[15rem] sm:h-[100%] w-full sm:w-[100%] lg:w-[75%] xl:w-[65%]'>
                  <img
                     loading='lazy'
                     src={'https://i.ibb.co/kyGpmks/profile-Picture.webp'}
                     alt='Ashutosh Lohani'
                     className='object-cover rounded-md max-h-full min-w-full brightness-90'
                     width={'auto'}
                     height={'auto'}
                  />
               </div>
            </div>
         </div>

         <div className='gap-10 flex flex-col sm:flex-row pb-[4rem] lg:pb-[8rem] xl:pb-[14rem] lg:pt-[1rem] mx-6 sm:mx-14 lg:mx-28'>
            <div className='basis-1/2'>
               <h1 className='flex flex-row text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] leading-tight xl:leading-none mb-8'>
                  <span className='text-accent-secondary'>{`*`}</span>
                  {`Development`}
               </h1>
               {/* <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-normal'> */}
               <p className='font-light leading-relaxed font-size-two opacity-60'>
                  {`In building web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale. Aesthetics, performance, and scalability are priorities on my radar.`}
               </p>
            </div>

            <div className='basis-1/2'>
               <h1 className='text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] leading-tight xl:leading-none mb-8'>
                  <span className='text-accent-secondary'>{`*`}</span>
                  {`Design`}
               </h1>
               {/* <p className='font-light text-base lg:text-[1rem] xl:text-[1.4rem] w-[100%] leading-normal'> */}
               <p className='font-light leading-relaxed font-size-two opacity-60'>
                  {`I'm probably not the typical designer positioned behind an Illustrator art board adjusting pixels, but I design. Immersed in style sheets tweaking typography and contemplating layouts is where you'll find me.`}
               </p>
            </div>
         </div>
      </section>
   );
};

export default About;
