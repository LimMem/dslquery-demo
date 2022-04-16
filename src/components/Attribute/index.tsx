import React, { FC } from 'react';
import Row from '../../Row';
import InputComp from './InputComp';
import { useDSLSelect } from '@lingxiteam/dsl';

interface AttributeProps {}

const Attribute: FC<AttributeProps> = props => {
  const { DSLCore } = useDSLSelect();
  return (
    <div>
      <Row>
        <InputComp
          hiddenValue
          name="copy"
          onClick={e => {
            DSLCore?.document.copy(e.key);
            console.log(
              DSLCore?.query(DSLCore?.document.clipboardId!).toJSON(true)
            );
          }}
        >
          复制组件
        </InputComp>
      </Row>
      <Row>
        <InputComp
          hiddenValue
          name="copy"
          onClick={e => {
            DSLCore?.document.pasteTo(e.key, '001');
          }}
        >
          粘贴组件
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="props"
          onClick={e => {
            DSLCore?.document.currentNode?.setProps({
              [e.key]: e.value,
            });
          }}
        >
          修改属性
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="style"
          onClick={e => {
            DSLCore?.document.currentNode?.setStyle({
              [e.key]: e.value,
            });
          }}
        >
          修改样式
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="customStyle"
          onClick={e => {
            DSLCore?.document.currentNode?.setCustomStyle({
              [e.key]: e.value,
            });
          }}
        >
          修改自定义样式
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="dataSource"
          onClick={e => {
            DSLCore?.document.rootNode?.appendDataSource(e);
          }}
        >
          增加数据源
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="dataSource"
          onClick={e => {
            DSLCore?.document.rootNode?.updateDataSourceByIndex(0, e);
          }}
        >
          更新数据源
        </InputComp>
      </Row>
      <Row>
        <InputComp
          hiddenValue
          name="dataSource"
          onClick={e => {
            DSLCore?.document.rootNode?.deleteDataSourceByIndex(+e.key);
          }}
        >
          删除指定索引数据源
        </InputComp>
      </Row>
      <Row>
        <InputComp
          hiddenValue
          name="dataSource"
          onClick={e => {
            DSLCore?.document.rootNode?.deleteDataSourceById(e.key);
          }}
        >
          删除指定id数据源
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="customfunction"
          onClick={e => {
            DSLCore?.document.rootNode?.appendCustomFunctions({
              eventName: e.value,
              eventCode: e.key,
            });
          }}
        >
          增加自定义函数
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="customfunction"
          onClick={e => {
            DSLCore?.document.rootNode?.updateCustomFunctionsByIndex(+e.key, {
              eventName: e.value,
            });
          }}
        >
          更新(索引)自定义函数
        </InputComp>
      </Row>
      <Row>
        <InputComp
          name="customfunction"
          onClick={e => {
            DSLCore?.document.rootNode?.updateCustomFunctionsByEventCode(
              e.key,
              {
                eventName: e.value,
              }
            );
          }}
        >
          更新(eventCode)自定义函数
        </InputComp>
      </Row>
      <Row>
        <InputComp
          hiddenValue
          name="customfunction"
          onClick={e => {
            DSLCore?.document.rootNode?.deleteCustomFunctionsByEventCode(e.key);
          }}
        >
          删除(eventCode)自定义函数
        </InputComp>
      </Row>
      <Row>
        <InputComp
          hiddenValue
          name="customfunction"
          onClick={e => {
            DSLCore?.document.rootNode?.deleteCustomFunctionsByIndex(+e.key);
          }}
        >
          删除(索引)自定义函数
        </InputComp>
      </Row>
    </div>
  );
};

export default Attribute;
