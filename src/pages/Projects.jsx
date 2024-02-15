import { useState } from 'react';
import close from '../assets/icons/close.svg';
import left from '../assets/icons/left.svg';
import liveCode from '../assets/icons/live-code.svg';
import liveWebsite from '../assets/icons/live-website.svg';
import right from '../assets/icons/right.svg';
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project3.png';
// import project4 from '../assets/project4.png';
import { MagneticButton } from '../components/button';

const projects = [
   {
      projectName: 'Bhuli',
      description:
         'A real-time chat application built with React and Socket.io with java and everything. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['React', 'Socket.io', 'CSS'],
      image: 'https://picsum.photos/500',
      role: 'Frontend Developer',
      duration: '1 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'InnerScore',
      description:
         'An online shopping platform developed using MERN stack (React, Node.js, MongoDB). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['React', 'Node.js', 'MongoDB'],
      image: 'https://picsum.photos/501',
      role: 'Backend Developer',
      duration: '2 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'AlmaBetter',
      description:
         'A weather application that fetches current weather information using a weather API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://picsum.photos/502',
      role: 'React Developer',
      duration: '3 months',
      liveLink: '',
      sourceCode: '',
   },
   {
      projectName: 'Dev Labs',
      description:
         'A task management tool with features like adding tasks, marking them as completed, deleting tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technology: ['Vue.js', 'Firebase', 'CSS'],
      image: 'https://picsum.photos/503',
      role: 'Vue Developer',
      duration: '4 months',
      liveLink: '',
      sourceCode: '',
   },
];

function projectLinks(project) {
   return (
      <div className='flex text-base sm:text-lg font-normal py-8 gap-8'>
         {!project.liveLink && (
            <MagneticButton>
               <a href={project.liveLink} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2 font-size'>
                     <img src={liveWebsite} className='h-6' />
                     View live
                  </div>
               </a>
            </MagneticButton>
         )}
         {!project.sourceCode && (
            <MagneticButton>
               <a href={project.sourceCode} target='_blank' rel='noreferrer'>
                  <div className='flex items-center gap-2 font-size'>
                     <img src={liveCode} className='h-5' />
                     Source code
                  </div>
               </a>
            </MagneticButton>
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
                           className=' cursor-pointer h-fit rounded text-light bg-cover bg-center bg-no-repeat my-4 sm:my-4 mx-0 sm:mx-4 '
                           style={{ backgroundImage: `url(${project.image})` }}>
                           <div className='bg-black bg-opacity-65 transition-all hover:bg-opacity-70 rounded flex flex-col justify-between'>
                              <div className='flex flex-col justify-center items-center py-[4rem] xl:py-[8rem]'></div>

                              <div className='p-4 lg:p-8'>
                                 <p className='text-[2.5rem] lg:text-[3rem] font-normal my-4'>
                                    {project.projectName}
                                 </p>
                                 <p className='line-clamp-2 font-size font-light mb-4 opacity-90 w-[90%]'>
                                    {project.description}
                                 </p>

                                 <div className='flex flex-wrap gap-2 my-4 opacity-90 text-[0.6rem] sm:text-[0.9rem]'>
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

               <div className='overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-50 bg-dark text-light w-[100vw] h-[100vh] shadow-xl'>
                  <button
                     className='absolute text-xl cursor-pointer rounded-full bg-accent-secondary hover:bg-accent-primary p-3 top-8 right-8'
                     onClick={closeModal}>
                     <img src={close} />
                  </button>
                  <div className='flex flex-col md:flex-row'>
                     <div className='image-container overflow-hidden flex basis-2/5 justify-center items-center w-full bg-black'>
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
