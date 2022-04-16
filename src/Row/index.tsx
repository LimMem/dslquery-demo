import './index.css';
import React, { FC } from 'react';

interface CompBProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const CompB: FC<CompBProps> = props => {
  return (
    <div className="row" {...props}>
      {props.children}
    </div>
  );
};

export default CompB;
