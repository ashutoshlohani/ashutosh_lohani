import React from 'react';
import api from '../assets/icons/api.svg';
import design from '../assets/icons/design.svg';
import down from '../assets/icons/down.svg';
import tune from '../assets/icons/seo.svg';
import website from '../assets/icons/website.svg';
import figma from '../assets/techIcons/figma.svg';
import firebase from '../assets/techIcons/firebase.svg';
import git from '../assets/techIcons/git-icon.svg';
import javascript from '../assets/techIcons/javascript.svg';
import next from '../assets/techIcons/nextjs-icon.svg';
import react from '../assets/techIcons/react.svg';
import redux from '../assets/techIcons/redux.svg';
import sass from '../assets/techIcons/sass.svg';
import tailwind from '../assets/techIcons/tailwindcss-icon.svg';
import three from '../assets/techIcons/threejs.svg';

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ icon, title, content }) => (
   <div className='flex flex-col align-top mb-8 basis-1/2'>
      {icon && React.cloneElement(icon, { className: 'h-4 w-4 sm:h-6 sm:w-6 opacity-60' })}
      <p className='text-[1rem] xl:text-[1.6rem] my-4 lg:my-8 '>{title}</p>
      <div className='font-size-two font-light opacity-60 leading-relaxed'>{content}</div>
   </div>
);

const techStackImagesOne = [
   { name: 'Javascript', image: javascript },
   { name: 'React', image: react },
   { name: 'Next JS', image: next },
   { name: 'Three JS', image: three },
   { name: 'Tailwind CSS', image: tailwind },
];

const techStackImagesTwo = [
   { name: 'SASS', image: sass },
   { name: 'Redux', image: redux },
   { name: 'Firebase', image: firebase },
   { name: 'Git', image: git },
   { name: 'Figma', image: figma },
];

function ServiceTools() {
   return (
      <section className='mx-6 sm:mx-14 lg:mx-28'>
         <h1 className='text-accent-secondary font-banner font-normal flex text-center justify-start leading-none my-8'>
            Toolbox
         </h1>

         {/* <div className='flex flex-col items-center opacity-70'>
            <p className='text-[0.8rem] sm:text-[1rem] text-left font-mono text-accent-secondary'>
               Code is like humor. when you
               <br></br>
               “have” to explain it, it’s bad.
            </p>
            <p className='text-[0.6rem] sm:text-[0.8rem] font-extralight font-mono'>-Cory House</p>
         </div> */}

         <p className='text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] leading- font-light  mb-16'>
            <img src={down} alt='down' className='my-2 h-6' />
            {`How can I help you : )`}
         </p>

         <div className='flex flex-col xl:flex-row align-top'>
            <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
               <ServiceItem
                  icon={<img src={website} alt='website' height={'100%'} width={'100%'} />}
                  title='Website Creation and Enhancement'
                  content={
                     <>
                        <p>Build a new website and web application.</p>
                        <p>Responsive Web Design.</p>
                        <p>Improve your website.</p>
                     </>
                  }
               />

               <ServiceItem
                  icon={<img src={design} alt='UI UX' height={'100%'} width={'100%'} />}
                  title='UI/UX Design'
                  content={
                     <>
                        <p>Design / refactor UI.</p>
                        <p>Interactive Landing Page.</p>
                        <p>Web Animation and Micro interactions.</p>
                     </>
                  }
               />
            </div>
            <div className='flex basis-1/2 flex-col md:flex-row sm:gap-8'>
               <ServiceItem
                  icon={<img src={api} alt='Services Integration' height={'100%'} width={'100%'} />}
                  title='Integration Services'
                  content={
                     <>
                        <p>API Integration for Web Services.</p>
                        <p>Content Management System Integration.</p>
                     </>
                  }
               />

               <ServiceItem
                  icon={<img src={tune} alt='Optimization' height={'100%'} width={'100%'} />}
                  title='Performance Optimization'
                  content={
                     <>
                        <p>SEO Optimization.</p>
                        <p>Improve frontend performance.</p>
                     </>
                  }
               />
            </div>
         </div>

         <div className='mt-[2rem] xl:mt-[8rem] xl:pb-[8rem]'>
            <img src={down} alt='down' className='my-2 h-6' />
            <p className='text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-light leading-tight'>
               My go to tech stack to
               <br />
               make any projects happen.
            </p>
            <div className='flex flex-col sm:flex-row my-[5rem] sm:my-[6rem] gap-6 lg:gap-[3rem] xl:gap-[4rem]'>
               <div className='flex justify-between basis-1/2'>
                  {techStackImagesOne.map(({ name, image }, index) => (
                     <div className='flex flex-col justify-between items-center' key={index}>
                        <img
                           src={image}
                           alt={name}
                           loading='lazy'
                           className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] grayscale hover:grayscale-0'
                        />
                        <p className='hidden sm:block text-[0.6rem] xl:text-[0.8rem] mt-3 xl:mt-6 font-light opacity-60'>
                           {name}
                        </p>
                     </div>
                  ))}
               </div>

               <div className='flex justify-between basis-1/2'>
                  {techStackImagesTwo.map(({ name, image }, index) => (
                     <div className='flex flex-col justify-between items-center' key={index}>
                        <img
                           src={image}
                           alt={name}
                           loading='lazy'
                           className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] grayscale hover:grayscale-0'
                        />
                        <p className='hidden sm:block text-[0.6rem] xl:text-[0.8rem] mt-3 xl:mt-5 font-light opacity-60'>
                           {name}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ServiceTools;
