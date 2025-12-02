import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps, IconName, DynamicIconProps, IconMap } from './Icon.types';
import { defaultColors } from './Icon.styles';

export const HomeIcon: React.FC<IconProps> = ({ color = defaultColors.inactive, size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M0.75 15.75L4.08333 12.4167M4.08333 12.4167L15.75 0.75L27.4167 12.4167M4.08333 12.4167V29.0833C4.08333 30.0038 4.82953 30.75 5.75 30.75H10.75M27.4167 12.4167L30.75 15.75M27.4167 12.4167V29.0833C27.4167 30.0038 26.6705 30.75 25.75 30.75H20.75M10.75 30.75C11.6705 30.75 12.4167 30.0038 12.4167 29.0833V22.4167C12.4167 21.4962 13.1629 20.75 14.0833 20.75H17.4167C18.3371 20.75 19.0833 21.4962 19.0833 22.4167V29.0833C19.0833 30.0038 19.8295 30.75 20.75 30.75M10.75 30.75H20.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TransferIcon: React.FC<IconProps> = ({ color = defaultColors.inactive, size = 29 }) => {
  const height = (size * 32) / 29;
  return (
    <Svg width={size} height={height} viewBox="0 0 29 32" fill="none">
      <Path
        d="M7.41602 7.41667L27.416 7.41667M27.416 7.41667L20.7493 0.75M27.416 7.41667L20.7493 14.0833M20.7493 24.0833L0.749349 24.0833M0.749349 24.0833L7.41601 30.75M0.749349 24.0833L7.41602 17.4167"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({ color = defaultColors.inactive, size = 29 }) => {
  const height = (size * 22) / 29;
  return (
    <Svg width={size} height={height} viewBox="0 0 29 22" fill="none">
      <Path
        d="M0.75 0.75H27.4167M0.75 10.75H27.4167M0.75 20.75H27.4167"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ICONS: IconMap = {
  home: HomeIcon,
  transfer: TransferIcon,
  menu: MenuIcon,
} as const;

export const Icon: React.FC<DynamicIconProps> = ({
  name,
  isActive = false,
  size = 32,
  activeColor = defaultColors.active,
  inactiveColor = defaultColors.inactive,
}) => {
  const IconComponent = ICONS[name];
  const color = isActive ? activeColor : inactiveColor;

  return <IconComponent color={color} size={size} />;
};
