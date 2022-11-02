import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@public/lottie/congratulations.json';

const CongratulationLottie = () => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default CongratulationLottie;