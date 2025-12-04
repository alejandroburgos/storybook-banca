import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProp } from './icon.type';

const ShowEye = ({ tintColor, height = 25, width = 25 }: IconProp) => {
  const fill = tintColor ?? '#000000';

  return (
    <Svg fill="none" height={height} viewBox="0 0 40 40" width={width}>
      <Path
        d="M20 12.088c-4.363 0-7.912 3.55-7.912 7.912 0 4.363 3.55 7.912 7.912 7.912s7.912-3.55 7.912-7.912c0-4.363-3.55-7.912-7.912-7.912zM20 26c-2.909 0-6-3.091-6-6s3.091-6 6-6 6 3.091 6 6-3.092 6-6 6z"
        fill={fill}
      />
      <Path
        d="M39.746 19.222c-.358-.489-8.872-11.97-19.746-11.97C9.125 7.253.61 18.734.254 19.223a1.32 1.32 0 000 1.556c.357.489 8.871 11.97 19.746 11.97 10.874 0 19.388-11.481 19.746-11.97a1.318 1.318 0 000-1.556zM20 31c-8.01 0-15.946-8.508-18-10.999 2.051-2.493 9.973-11 18-11 8.01 0 15.946 8.508 18 11-2.051 2.493-9.973 11-18 11z"
        fill={fill}
      />
    </Svg>
  );
};

export default ShowEye;
