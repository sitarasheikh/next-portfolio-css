"use client";

import { TypeAnimation } from 'react-type-animation';
import './styles/TextEffect.css'; // Link to the CSS file

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Coder',
        1500,
        'Web Developer',
        1500,
        'Programmer',
        1500,
        'AI Engineer',
        1500
      ]}
      speed={50}
      className='text-effect' // Using a CSS class for styling
      repeat={Infinity}
    />
  );
};

export default TextEffect;
