import { FC, useEffect } from 'react';
import { useDSLSelect, onListenParamType } from '@lingxiteam/dsl';
import json from '../../data.json';
import Row from '../../Row';

interface OtherProps {}

const Other: FC<OtherProps> = props => {
  const { DSLCore, addListener, removeListener } = useDSLSelect();

  // useEffect(() => {
  //   // 链式调用
  //   DSLCore?.current?.appendChild({}).setProps().setStyle().setCustomStyle()
  //     .style;

  //   // 接口提示
  //   DSLCore?.document.query('id').toJSON();

  //   // 监听变化

  //   const onChange = (params: onListenParamType) => {
  //     console.log(params.id);
  //   };

  //   addListener(onChange);

  //   return () => {
  //     removeListener(onChange);
  //   };
  // }, []);

  useEffect(() => {
    const onChange = (params: onListenParamType) => {
      console.log('params', params);
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
          DSLCore?.clear();
        }}
      >
        清除
      </Row>
      <Row
        onClick={() => {
          DSLCore?.reset();
        }}
      >
        重置
      </Row>
      <Row
        onClick={() => {
          DSLCore?.init(json);
        }}
      >
        初始化
      </Row>
      <Row
        onClick={e => {
          console.log(DSLCore?.toJSON());
        }}
      >
        获取JSON值
      </Row>
    </div>
  );
};

export default Other;
