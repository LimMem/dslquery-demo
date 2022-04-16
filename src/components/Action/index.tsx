import React, { FC, useState } from 'react';
import { Select } from 'antd';
import Row from '../../Row';
import node from '../../node1.json';
import { useDSLSelect } from '@lingxiteam/dsl';
import './index.css';
import Attribute from '../Attribute';
import Other from '../Other';

const { Option } = Select;

interface ActionProps {}

const getNode = () => {
  return {
    ...node,
    id: '新增节点' + `${Math.random() * 190}`,
  };
};

const opts = [
  {
    title: '属性',
    value: 'props',
  },
  {
    title: '操作node',
    value: 'action',
  },
  {
    title: '其他',
    value: 'other',
  },
];

const Action: FC<ActionProps> = props => {
  const { DSLCore } = useDSLSelect();
  const [value, setValue] = useState('');
  const [type, setType] = useState('action');
  return (
    <div className="action">
      <Row>
        <span>设置属性</span>
        <Select value={type} onChange={v => setType(v)}>
          {opts.map(it => {
            return <Option value={it.value}>{it.title}</Option>;
          })}
        </Select>
      </Row>
      {type === 'action' && (
        <div>
          输入标识：{' '}
          <input
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
          />
          <Row
            onClick={() => {
              if (DSLCore?.document.current) {
                // DSLCore.query(value).appendChild(node);
                DSLCore.document.current?.appendChild(getNode());
              } else {
                console.error(`${value}: 节点没找到`);
              }
            }}
          >
            在选中节点追加元素
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.insertChild(0, getNode());
            }}
          >
            在选中的节点第0个元素插入节点
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.insertChildBeforeById(
                value,
                getNode()
              );
            }}
          >
            在选中的节点前(输入框的值id)节点
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.insertChildAfterById(value, getNode());
            }}
          >
            在选中的节点后(输入框的值id)节点
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.remove();
            }}
          >
            删除选中的节点
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.removeAllChildren();
            }}
          >
            删除所有子元素
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.removeChildById(value);
            }}
          >
            删除当前节点下的id子元素
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.removeChildByIndex(+value);
            }}
          >
            删除当前节点下的第几个子元素
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.moveTo(value, 0);
            }}
          >
            移动到某个节点下的第一个元素
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.moveToBefore(value);
            }}
          >
            移动到某个节点前(输入框id)
          </Row>
          <Row
            onClick={() => {
              DSLCore?.document.current?.moveToAfter(value);
            }}
          >
            移动到某个节点后(输入框id)
          </Row>
        </div>
      )}
      {type === 'props' && <Attribute />}
      {type === 'other' && <Other />}
    </div>
  );
};

export default Action;
