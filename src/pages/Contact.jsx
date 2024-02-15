import { MagneticButton } from '../components/button';
import Button from '../components/button/Button';

function Contact() {
   const downloadPDF = () => {
      const PDFUrl = '/ashutosh_lohani.pdf';
      const link = document.createElement('a');
      link.href = PDFUrl;
      link.target = '_blank';
      // link.download = 'ashutosh_lohani.pdf';
      link.click();
   };

   return (
      <section id='contact' className='mx-6 sm:mx-14 lg:mx-28 py-[8rem]'>
         <div className='flex flex-wrap justify-between items-start gap-8 md:gap-16'>
            <div className='font-light leading-none'>
               <p className='text-[1.5rem] sm:text-[2rem]'>{'Have an awesome idea?'}</p>
               <p className='text-[3rem] sm:text-[2rem] text-accent-secondary py-2'>
                  {"Let's work together."}
               </p>
            </div>

            <MagneticButton>
               <Button onClick={downloadPDF} label='Resume' />
            </MagneticButton>
         </div>

         <div className=' sm:hidden font-size font-light py-8 lg:w-[50%]'>
            {`I am actively seeking full-time and freelance opportunities within dynamic startup environments,established development firms, and companies with a focus on product innovation.`}
         </div>

         <div className='pt-16'>
            <hr className='hidden sm:block' />
            <p className='text-center sm:text-left text-[1rem] sm:text-[4.4rem] lg:text-[6rem] xl:text-[8rem] break-words sm:leading-none overflow-hidden py-4 sm:pt-[4rem] border sm:border-none rounded-full sm:rounded-none hover:scale-95 sm:hover:scale-100'>
               <a
                  href='mailto:aashutosh.lohaani@gmail.com'
                  className='sm:uppercase hover:underline'>
                  ashulohani97@
                  <br className='hidden sm:block' />
                  outlook.com
               </a>
            </p>
            <p className='sm:hidden text-center text-[1rem] overflow-hidden mt-4 py-4 border rounded-full hover:scale-95'>
               <a href='tel:+918954991441'>+91 89549 91441</a>
            </p>
         </div>
      </section>
   );
}

export default Contact;
