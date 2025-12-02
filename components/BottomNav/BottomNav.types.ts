import { IconName } from '../Icon/Icon.types';
import { ThemeVariant } from '../../theme/colors';

export type NavItem = {
  id: string;
  label: string;
  icon?: IconName;
};

export type BottomNavProps = {
  items: NavItem[];
  activeId: string;
  onItemPress: (id: string) => void;
  variant?: ThemeVariant;
  height?: number;
  borderRadius?: number;
  iconSize?: number;
  showLabels?: boolean;
  activeIconBg?: boolean;
};

export type NavItemProps = {
  item: NavItem;
  isActive: boolean;
  onPress: () => void;
  themeColors: {
    bg: string;
    text: string;
    shadow: string;
  };
  iconSize: number;
  showLabel: boolean;
  activeIconBg: boolean;
};
