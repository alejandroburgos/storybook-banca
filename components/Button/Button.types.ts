import { DimensionValue, TextStyle } from 'react-native';
import { ThemeVariant } from '../../theme/colors';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export type MyButtonProps = {
  onPress: () => void;
  label: string;
  variant?: ThemeVariant;
  styleVariant?: ButtonVariant;
  size?: ButtonSize;
  bgColor?: string;
  boxShadowColor?: string;
  borderRadius?: number;
  textColor?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  paddingHorizontal?: number;
  paddingVertical?: number;
  disabled?: boolean;
  width?: DimensionValue;
  elevation?: number;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export type ButtonSizeConfig = {
  paddingHorizontal: number;
  paddingVertical: number;
  fontSize: number;
};

export type ButtonSizes = Record<ButtonSize, ButtonSizeConfig>;
