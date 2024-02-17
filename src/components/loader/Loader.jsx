import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { opacity, slideUp } from './animation';
import { words } from './greetingWords';
import styles from './style.module.scss';

export default function Loader() {
   const [index, setIndex] = useState(0);
   const [dimension, setDimension] = useState({ width: 0, height: 0 });

   useEffect(() => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
   }, []);

   useEffect(() => {
      if (index == words.length - 1) return;
      setTimeout(() => {
         setIndex(index + 1);
      }, 125);
   }, [index]);

   return (
      <motion.div variants={slideUp} initial='initial' exit='exit' className={styles.introduction}>
         {dimension.width > 0 && (
            <>
               <motion.p variants={opacity} initial='initial' animate='enter'>
                  {words[index]}
               </motion.p>
            </>
         )}
      </motion.div>
   );
}
