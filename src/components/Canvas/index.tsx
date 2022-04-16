import React, { FC } from 'react';
import { useDSLSelect } from '@lingxiteam/dsl';
import './index.css';
import DSLNode from '@lingxiteam/dsl/es/core/node/Node';

interface CanvasProps {}

const Canvas: FC<CanvasProps> = props => {
  const { DSLCore } = useDSLSelect();

  const renderComponent = (components?: any[]) => {
    const comps = components as DSLNode[];
    return comps?.map(comp => {
      if (comp.attribute.isContainer) {
        return (
          <div
            key={comp.id}
            className="canvas-wrapper"
            style={
              DSLCore?.document.current?.id === comp.id
                ? { border: '4px dotted red' }
                : {}
            }
            onClick={e => {
              e.stopPropagation();
              DSLCore?.document.setCurrent(comp.id);
            }}
          >
            {comp.id}: {comp.attribute.compName}
            {renderComponent(comp.children())}
          </div>
        );
      }
      return (
        <div
          className="comp"
          key={comp.id}
          style={
            DSLCore?.document.current?.id === comp.id
              ? { border: '4px dotted red' }
              : {}
          }
          onClick={e => {
            e.stopPropagation();
            DSLCore?.document.setCurrent(comp.id);
          }}
        >
          {comp.id}: {comp.attribute.compName}
        </div>
      );
    });
  };

  return (
    <div className="canvas">
      {renderComponent(DSLCore?.document.rootNode?.children())}
    </div>
  );
};

export default Canvas;
