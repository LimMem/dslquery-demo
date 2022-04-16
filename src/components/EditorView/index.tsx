import React, { FC } from 'react';
import Slider from '../Slider';
import Main from '../Main';
import Props from '../Props';
import './index.css';

interface EditorViewProps {}

const EditorView: FC<EditorViewProps> = props => {
  return (
    <div className="editor">
      <Slider />
      <Main />
      <Props />
    </div>
  );
};

export default EditorView;
