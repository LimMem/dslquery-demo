import React, { FC } from 'react';
import Canvas from '../Canvas';
import Action from '../Action';
import './index.css';

interface MainProps {}

const Main: FC<MainProps> = props => {
  return (
    <div className="main">
      <Canvas />
      <Action />
    </div>
  );
};

export default Main;
