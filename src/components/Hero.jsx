import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { parthprofessional } from '../assets/assets';
import SocialLinks from './Sidebar';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'Full Stack Developer', 'Frontend Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-evenly gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {/* I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications */}
              WELCOME TO MY WORLD
            </p>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Parth Dangroshiya</span>
            </h1>
            <h3 className='text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide'>
              <span>{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle='|'
                cursorColor='#ff014f'
              />
            </h3>

            <SocialLinks />
          </div>
        </div>
        {/* <ComputersCanvas /> */}
        <div style={{ width: '400px', height: '400px' }}>
          <img
            className='w-full h-full rounded-3xl p-2 object-cover'
            src={parthprofessional}
            alt='parthpic'
          />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
