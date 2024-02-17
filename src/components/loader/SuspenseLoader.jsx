import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { words } from './greetingWords';

export default function SuspenseLoader() {
   {
      const [index, setIndex] = useState(0);

      useEffect(() => {
         const timeoutId = setTimeout(() => {
            if (index === words.length - 1) {
               setIndex(0);
            } else {
               setIndex(index + 1);
            }
         }, 125);

         return () => clearTimeout(timeoutId);
      }, [index]);

      return (
         <div className={styles.introduction}>
            <p>{words[index]}</p>
         </div>
      );
   }
}
