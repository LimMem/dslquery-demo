import React, { FC, useMemo } from 'react';
import { useDSLSelect } from '@lingxiteam/dsl';
import './index.css';
import DSLNode from '@lingxiteam/dsl/es/core/node/Node';
import RootNode from '@lingxiteam/dsl/es/core/node/RootNode';

interface PropsProps {}

const Props: FC<PropsProps> = props => {
  const { DSLCore } = useDSLSelect();

  const node = DSLCore?.document.current || DSLCore?.document.rootNode;
  return (
    <div className="props">
      <div className="compId">
        组件id: <span style={{ color: '#f40' }}>{node?.id}</span>{' '}
      </div>
      {!node?.isRootNode && (
        <>
          <div className="group">属性</div>
          <div className="group-value">
            {JSON.stringify((node as DSLNode)?.props)}
          </div>

          <div className="group">样式</div>
          <div className="group-value">
            {JSON.stringify((node as DSLNode)?.style)}
          </div>

          <div className="group">自定义样式</div>
          <div className="group-value">
            {JSON.stringify((node as DSLNode)?.customStyle)}
          </div>
        </>
      )}
      <div className="group">事件</div>
      <div className="group-value">{JSON.stringify(node?.setEvents)}</div>
      {node?.isRootNode && (
        <>
          <div className="group">自定义函数</div>
          <div className="group-value">
            {JSON.stringify((node as RootNode)?.customFunctions)}
          </div>
          <div className="group">数据源</div>
          <div className="group-value">
            {JSON.stringify((node as RootNode)?.dataSource)}
          </div>
        </>
      )}

      <div className="group">所有属性</div>
      <div className="group-value">{JSON.stringify(node?.attribute)}</div>
    </div>
  );
};

export default Props;
