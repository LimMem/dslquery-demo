import { useDSLSelect } from '@lingxiteam/dsl';
import data from '../../data.json';
import node from '../../node1.json';
import React, { FC, useEffect } from 'react';
import Row from '../../Row';

interface ActionsProps {}

const Actions: FC<ActionsProps> = props => {
  const { DSLCore, addListener, removeListener } = useDSLSelect();

  useEffect(() => {
    const onChange = (params: any) => {
      console.log('变更后的节点: ', params);
    };
    addListener(onChange);
    return () => {
      removeListener(onChange);
    };
  }, []);

  return (
    <div>
      <Row
        onClick={() => {
          DSLCore?.query('5515476').appendChild(node);
        }}
      >
        追加内容
      </Row>
      <Row
        onClick={() => {
          DSLCore?.query('View_5515476_1').insertChildBeforeById(
            'View_7822085',
            node
          );
        }}
      >
        在子节点某个id前插入子元素
      </Row>
      <Row>在子节点某个id后插入子元素</Row>
      <Row>在某个位置插入子元素</Row>
      <Row>删除自己</Row>
      <Row>删除所有子元素</Row>
      <Row>通过id删除子节点</Row>
      <Row>通过索引删除子节点</Row>
      {DSLCore?.query('View_5515476_1')
        .children()
        ?.map((it, index) => {
          return <div key={index}>{it?.attribute.compName}</div>;
        })}
    </div>
  );
};

export default Actions;
