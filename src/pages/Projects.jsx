import { useState } from 'react';
import close from '../assets/icons/close.svg';
import left from '../assets/icons/left.svg';
import liveCode from '../assets/icons/live-code.svg';
import liveWebsite from '../assets/icons/live-website.svg';
import right from '../assets/icons/right.svg';
import aiko from '/aiko.webp';
import airpods from '/airpods.webp';
import digitally from '/digitally.webp';
import dona from '/dona.webp';
import innerscore from '/innerscore.webp';
import teerific from '/teerific.webp';

import { MagneticButton } from '../components/button';

const projects = [
   {
      projectName: 'Aiko Store',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['Next.js', 'React', 'Shopify CMS', 'Tailwind'],
      image: aiko,
      role: 'Frontend Developer',
      duration: '1 months',
      liveLink: 'https://aikoplanet.com/',
      sourceCode: '',
   },
   {
      projectName: 'Tee Rific',
      description:
         'This T-Shirt Customizer developed with ThreeJS, it harnesses the capabilities of a powerful 3D graphics library to render and animate intricate 3D models. React Three Fiber enriches the environment by seamlessly integrating ThreeJS within React. TailwindCSS empowers the project with a streamlined and responsive design framework, while Framer Motion enhances the user experience through captivating animations. This application facilitates loading, creation and customization of visually appealing 3D models, complete with dynamic lighting and precise camera positioning. The capability to introduce custom colors and file formats adds a personalized touch to the experience.',
      technology: ['Three', 'React Three Fiber', 'Framer Motion'],
      image: teerific,
      role: 'Frontend Developer',
      duration: '2 weeks',
      liveLink: 'https://ashutoshlohani.github.io/Tee-rific/',
      sourceCode: 'https://github.com/ashutoshlohani/Tee-rific',
   },

   {
      projectName: 'Dona',
      description: `This project is an exciting replication of dona.ai, a straightforward to-do list boasting a clean UI and exceptional user experience. I have always been drawn to their design, prompting me to embark on recreating it using Typescript and React, powered by Vite as the build tool. To enhance the user interface, I incorporated react-beautiful-dnd for draggable lists and utilized react-router-dom for seamless navigation. For robust state management, I employed redux saga and toolkit, while tailwindcss was chosen to add a touch of style.`,
      technology: ['React + Vite', 'TypeScript', 'Redux', 'Tailwind'],
      image: dona,
      role: 'Frontend Developer',
      duration: '3 weeks',
      liveLink: 'https://ashutoshlohani.github.io/donaAI/',
      sourceCode: 'https://github.com/ashutoshlohani/donaAI',
   },

   {
      projectName: 'InnerScore',
      description:
         "Led the development of the InnerScore website, a platform that enables teachers and students to share resources and collaborate. I was responsible for developing the website's user interface (UI), integrated it with the Backend data management system, and achieved responsive design for tablet, and mobile views using SCSS. Utilized React as the framework, integrated routing, forms data, REST APIs, and Email JS with SMTP for automated email notifications and designed Figma mail templates. Achieved a 60% website performance improvement, better SEO, and Lighthouse Score.",
      technology: ['React', 'React Router', 'SCSS', 'REST-APIs'],
      image: innerscore,
      role: 'Frontend Developer',
      duration: '1 month',
      liveLink: 'https://innerscore.ai/',
      sourceCode: '',
   },

   {
      projectName: 'Airpods clone',
      description: `This project is inspired by Apple's AirPods Pro landing page. Created using vanilla JavaScript and CSS, this project comes to life with dynamic animations powered by GSAP and Lottie.`,
      technology: ['GSAP', 'Lottie', 'JavaScript', 'CSS'],
      image: airpods,
      role: 'Frontend Developer',
      duration: '4 days',
      liveLink: 'https://ashutoshlohani.github.io/apple-airpod-clone-react/',
      sourceCode: 'https://github.com/ashutoshlohani/apple-airpod-clone-react',
   },

   {
      projectName: 'Digitally',
      description:
         "In Digitally project I seamlessly integrated React, Framer Motion, and Tailwind CSS to craft an immersive and visually stunning experience. Leveraging the power of React components, the website ensures responsiveness across diverse devices. Framer Motion introduces captivating transition animations, elevating user interaction to new heights. Tailwind CSS provides a clean and modern design aesthetic, while relatable content and strategic storytelling connect with the audience on a personal level. With its modern design and relatable content, this project exemplifies the fusion of creativity and functionality in the digital marketing realm, showcasing the agency's expertise in navigating the ever-evolving landscape of online brand presence.",
      technology: ['React', 'Framer Motion', 'Tailwind'],
      image: digitally,
      role: 'Frontend Developer',
      duration: '1 Week',
      liveLink: 'https://ashutoshlohani.github.io/digitally/',
      sourceCode: 'https://github.com/ashutoshlohani/digitally',
   },
];

function projectLinks(project) {
   return (
      <div className='flex text-base sm:text-lg font-normal py-8 gap-8'>
         {project.liveLink && (
            <MagneticButton>
               <a href={project.liveLink} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2 font-size'>
                     <img src={liveWebsite} className='h-6' />
                     View live
                  </div>
               </a>
            </MagneticButton>
         )}
         {project.sourceCode && (
            <MagneticButton>
               <a href={project.sourceCode} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2 font-size'>
                     <img src={liveCode} className='h-5' />
                     Source code
                  </div>
               </a>
            </MagneticButton>
         )}
         {!project.sourceCode && (
            <div className='flex items-center gap-2 font-size'>Client Project</div>
         )}
      </div>
   );
}
function Projects() {
   const [isModalOpen, setModalOpen] = useState(false);
   const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

   const openModal = index => {
      setSelectedProjectIndex(index);
      setModalOpen(true);
      toggleMenu();
   };

   const closeModal = () => {
      setSelectedProjectIndex(null);
      setModalOpen(false);
      toggleMenu();
   };

   const previous = () => {
      setSelectedProjectIndex(prevIndex => (prevIndex - 1 + projects.length) % projects.length);
   };

   const next = () => {
      setSelectedProjectIndex(prevIndex => (prevIndex + 1) % projects.length);
   };

   const enableScroll = () => {
      document.body.style.overflow = 'visible';
   };

   const disableScroll = () => {
      document.body.style.overflow = 'hidden';
   };

   const toggleMenu = () => {
      setModalOpen(prevMenuState => prevMenuState);
      if (!isModalOpen) {
         disableScroll();
      } else {
         enableScroll();
      }
   };

   return (
      <section id='projects'>
         <div className='mx-6 sm:mx-14 lg:mx-28 py-8'>
            <h1 className='text-accent-secondary font-banner font-normal flex text-center justify-start leading-none py-8'>
               Projects
            </h1>

            <div className='flex flex-col items-start pb-8 opacity-70'>
               <p className='text-[0.8rem] sm:text-[1rem] text-left text-light opacity-70 '>
                  Code is like humor. when you
                  <br></br>
                  “have” to explain it, it’s bad.
               </p>
               <p className='text-[0.6rem] sm:text-[0.8rem] font-light'>-Cory House</p>
            </div>

            <div>
               <div className='flex flex-wrap pb-[4rem] lg:pb-[8rem]'>
                  {projects.map((project, index) => (
                     <div key={index} className='w-full sm:w-1/2 hover:scale-[1.01] transition-all'>
                        <div
                           onClick={() => openModal(index)}
                           className=' cursor-pointer h-fit rounded text-light bg-light bg-cover bg-center bg-no-repeat my-4 sm:my-4 mx-0 sm:mx-4 '
                           style={{ backgroundImage: `url(${project.image})` }}>
                           <div className='bg-black bg-opacity-65 transition-all hover:bg-opacity-70 rounded flex flex-col justify-between'>
                              <div className='flex flex-col justify-center items-center py-[4rem] xl:py-[8rem]'></div>

                              <div className='p-4 lg:p-8'>
                                 <p className='text-[2.5rem] lg:text-[3rem] font-normal my-4'>
                                    {project.projectName}
                                 </p>
                                 <p className='line-clamp-2 font-size font-light mb-4 opacity-80 w-[65%]'>
                                    {project.description}
                                 </p>

                                 <div className='flex flex-wrap gap-2 my-4 opacity-80 text-[0.6rem] sm:text-[0.9rem]'>
                                    {project.technology.map((tech, techIndex) => (
                                       <div
                                          key={techIndex}
                                          className='border border-light rounded-full w-fit px-4 py-2'>
                                          {tech}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {isModalOpen && selectedProjectIndex !== null && (
            <div className='fixed inset-0 flex items-center justify-center'>
               <div className='absolute inset-0 bg-black opacity-50' onClick={closeModal}></div>

               <div className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-light text-dark w-[100vw] h-[100vh] shadow-xl'>
                  <button
                     className='absolute text-xl cursor-pointer rounded-full bg-accent-secondary hover:bg-accent-primary p-3 top-8 right-8'
                     onClick={closeModal}>
                     <img src={close} />
                  </button>
                  <div className='flex flex-col md:flex-row'>
                     <div className='overflow-hidden flex basis-2/5 justify-center items-center w-full bg-light'>
                        <img
                           src={projects[selectedProjectIndex].image}
                           alt='Cover Picture'
                           className='object-cover h-full'
                        />
                     </div>

                     <div className='basis-3/5 p-8 sm:p-10 sm:overflow-y-auto'>
                        <div className='flex flex-col h-full justify-between'>
                           <div className='text-sm sm:text-base'>
                              <p className='text-5xl sm:text-7xl'>
                                 {projects[selectedProjectIndex].projectName}
                              </p>
                              {projectLinks(projects[selectedProjectIndex])}

                              <div className='py-2'>
                                 <p className='font-size font-semibold pb-1'>Role</p>
                                 <p className='font-size leading-relaxed font-light opacity-70'>
                                    {projects[selectedProjectIndex].role}
                                 </p>
                              </div>

                              <div className='py-2'>
                                 <p className='font-size font-semibold pb-1'>Duration</p>
                                 <p className='font-size leading-relaxed font-light opacity-70'>
                                    {projects[selectedProjectIndex].duration}
                                 </p>
                              </div>

                              <div className='py-2'>
                                 <p className='font-size font-semibold pb-1'>Description</p>
                                 <p className='font-size leading-relaxed font-light opacity-70'>
                                    {projects[selectedProjectIndex].description}
                                 </p>
                              </div>
                           </div>

                           <div className='flex flex-col justify-between items-start py-4'>
                              <div className='flex flex-wrap  gap-2 text-[0.6rem] sm:text-[1rem]'>
                                 {projects[selectedProjectIndex].technology.map(
                                    (tech, techIndex) => (
                                       <div
                                          key={techIndex}
                                          className='border bg-dark text-light rounded-full w-fit px-4 py-2'>
                                          {tech}
                                       </div>
                                    )
                                 )}
                              </div>
                              <div className='flex gap-4 pt-8 lg:pt-0 w-full justify-center sm:justify-end'>
                                 <button onClick={previous}>
                                    <img src={left} />
                                 </button>
                                 {selectedProjectIndex + 1} / {projects.length}
                                 <button onClick={next}>
                                    <img src={right} />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
}

export default Projects;
