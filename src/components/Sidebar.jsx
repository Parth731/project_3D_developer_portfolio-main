import { motion } from 'framer-motion';
import { sideLinks } from '../constants';

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
      <ul>
        {sideLinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center h-14 w-40 ml-[-105px] hover:ml-[-10px]  duration-300 pl-2' +
              ' ' +
              style
            }>
            <a
              href={href}
              className='flex justify-between items-center w-56 text-white bg-primary_color h-14 px-3 hover:rounded-md'
              download={download}
              target='_blank'
              rel='noreferrer'>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
