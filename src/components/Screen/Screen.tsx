import React from 'react';

import './Screen.css';

interface Props {
  expression: string
}

const Screen: React.FC<Props> = ({ expression }): JSX.Element =>
  <div className="screen">
    {expression}
  </div>

export default Screen;