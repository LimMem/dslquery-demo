import React, { FC, useRef } from 'react';
import { message } from 'antd';

interface InputCompProps {
  onClick: (e: { key: string; value?: string }) => void;
  name: string;
  hiddenValue?: boolean;
}

const InputComp: FC<InputCompProps> = props => {
  const keyRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const { onClick = () => {}, children, name, hiddenValue = false } = props;

  return (
    <>
      <div>
        <span>属性名{name}：key</span>
        <input type="text" ref={keyRef} />
      </div>
      {!hiddenValue && (
        <div>
          <span>属性值: value</span>
          <input type="text" ref={valueRef} />
        </div>
      )}

      <span
        className="attr-btn"
        onClick={() => {
          if (keyRef.current?.value) {
            onClick({
              key: keyRef.current?.value,
              value: valueRef.current?.value,
            });
          } else {
            message.error('属性名不能为空');
          }
        }}
      >
        {children}
      </span>
    </>
  );
};

export default InputComp;
