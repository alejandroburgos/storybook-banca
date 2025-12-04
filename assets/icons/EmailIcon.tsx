import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProp } from './icon.type';

const EmailIcon = ({ tintColor }: IconProp) => {
  const stroke = tintColor || '#000000';

  return (
    <Svg fill="none" height={20} viewBox="0 0 20 20" width={20}>
      <Path
        d="M2.5 6.66699L9.0755 11.0507C9.63533 11.4239 10.3647 11.4239 10.9245 11.0507L17.5 6.66699M4.16667 15.8337H15.8333C16.7538 15.8337 17.5 15.0875 17.5 14.167V5.83366C17.5 4.91318 16.7538 4.16699 15.8333 4.16699H4.16667C3.24619 4.16699 2.5 4.91318 2.5 5.83366V14.167C2.5 15.0875 3.24619 15.8337 4.16667 15.8337Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EmailIcon;
