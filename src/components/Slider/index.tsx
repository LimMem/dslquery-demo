import React, { FC } from 'react';
import { useDSLSelect } from '@lingxiteam/dsl';
import DSLNode from '@lingxiteam/dsl/es/core/node/Node';
import RootNode from '@lingxiteam/dsl/es/core/node/RootNode';
import './index.css';

interface SliderProps {}

const Container = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & { id: string }
) => {
  const { DSLCore } = useDSLSelect();

  return (
    <div
      {...props}
      onClick={e => {
        e.stopPropagation();
        DSLCore?.document.setCurrent(props.id);
      }}
      className={
        DSLCore?.document.currentNode?.id === props.id
          ? 'select slider-row'
          : 'slider-row'
      }
    />
  );
};

const DynamicComp = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & { id: string }
) => {
  const { DSLCore } = useDSLSelect();
  return (
    <div
      onClick={() => {
        DSLCore?.document.setCurrent(props.id);
      }}
      style={{ height: '30px', lineHeight: '30px' }}
      className={DSLCore?.document.currentNode?.id === props.id ? 'select' : ''}
    >
      {props.children}
    </div>
  );
};

const Slider: FC<SliderProps> = props => {
  const { DSLCore } = useDSLSelect();
  const renderComponent = (nodes?: DSLNode[] | RootNode[] | null) => {
    if (!nodes) {
      return null;
    }
    return nodes?.map(node => {
      return (
        <div style={{ paddingLeft: '10px' }}>
          <DynamicComp key={node.id} id={node.id} style={node.attribute.style}>
            {node.attribute.label}
          </DynamicComp>
          {renderComponent(node.children() as any)}
        </div>
      );
    });
  };
  return (
    <div className="slider">
      {renderComponent(DSLCore?.document.rootNode?.children() as any)}
    </div>
  );
};

export default Slider;
