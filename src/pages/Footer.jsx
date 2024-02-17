import dribbble from '../assets/icons/dribbble.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedIn.svg';
import thankyouText from '../assets/thankyouText.svg';
import { MagneticButton } from '../components/button';

function Footer() {
   const socialLink = (url, label, icon) => (
      <a href={url} target='_blank' rel='noopener noreferrer' aria-label={label}>
         {icon && (
            <img
               src={icon}
               alt={label}
               loading='lazy'
               height={'100%'}
               width={'100%'}
               className='w-[1.8rem] md:w-[2rem] lg:w-[2.5rem] xl:w-[2.8rem]'
            />
         )}
      </a>
   );

   return (
      <footer id='contact'>
         <div className='mx-6 sm:mx-14 lg:mx-28 pb-8 sm:pt-8 bg-lime-90'>
            <div className='flex flex-wrap justify-between items-end'>
               <div className='relative'>
                  <img
                     src={thankyouText}
                     alt='version year'
                     height={'100%'}
                     width={'100%'}
                     className='rotate-infinite w-[6rem] lg:w-[10rem]'
                  />
                  <p
                     className='font-mono text-sm sm:text-base lg:text-2xl'
                     style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        margin: '0',
                        lineHeight: 1,
                     }}>
                     <span>{String(new Date().getFullYear()).slice(0, 2)}</span>
                     <br />
                     <span>{String(new Date().getFullYear()).slice(-2)}</span>
                  </p>
               </div>

               <div className='flex flex-col items-end gap-4'>
                  <div className='flex gap-4 sm:gap-8 text-[1.8rem] sm:text-[2.5rem]'>
                     <MagneticButton>
                        {socialLink(
                           'https://www.linkedin.com/in/ashutosh-lohani/',
                           'LinkedIn',
                           linkedin
                        )}
                     </MagneticButton>
                     <MagneticButton>
                        {socialLink('https://github.com/ashutoshlohani', 'GitHub', github)}
                     </MagneticButton>
                     <MagneticButton>
                        {socialLink('https://dribbble.com/oaashu', 'Dribbble', dribbble)}
                     </MagneticButton>
                  </div>
                  <p className='hidden sm:block font-size opacity-50'>social</p>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
