import * as React from 'react';

const Strong: React.FC = ({ children }: object) => (
  <span style={{ fontWeight: 'bold' }}>
    {children}
  </span>
);

export default Strong;
