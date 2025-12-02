import React from 'react';

export type IconProps = {
  color?: string;
  size?: number;
};

export type IconName = 'home' | 'transfer' | 'menu';

export type DynamicIconProps = {
  name: IconName;
  isActive?: boolean;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
};

export type IconComponent = React.FC<IconProps>;
export type IconMap = Record<IconName, IconComponent>;
