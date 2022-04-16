import React, { FC, useEffect } from 'react';
import data from '../../data.json';
import Slider from '../../components/Slider';
import { DSLProvider } from '@lingxiteam/dsl';
import EditorView from '../../components/EditorView';

interface EditorProps {}

const Editor: FC<EditorProps> = props => {
  const [json, setJson] = React.useState<any>();
  useEffect(() => {
    setTimeout(() => {
      setJson(data);
    }, 2000);
  }, []);

  return (
    <DSLProvider json={json}>
      <EditorView />
    </DSLProvider>
  );
};

export default Editor;
