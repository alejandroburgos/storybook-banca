import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ButtonSizes } from './Button.types';

export const buttonSizes: ButtonSizes = {
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
  },
  medium: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    fontSize: 16,
  },
  large: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    fontSize: 18,
  },
};

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
    alignSelf: 'stretch',
  },
  disabled: {
    backgroundColor: '#D1D5DB',
    color: '#525252ff',
  },
  text: {
    textAlign: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export const createContainerStyle = (params: {
  backgroundColor: string;
  borderRadius: number;
  shadowColor: string;
  elevation: number;
  width?: ViewStyle['width'];
  paddingHorizontal: number;
  paddingVertical: number;
  borderWidth?: number;
  borderColor?: string;
}): ViewStyle => ({
  backgroundColor: params.backgroundColor,
  borderRadius: params.borderRadius,
  shadowColor: params.shadowColor,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: params.elevation,
  paddingHorizontal: params.paddingHorizontal,
  paddingVertical: params.paddingVertical,
  ...(params.width && { width: params.width }),
  ...(params.borderWidth && { borderWidth: params.borderWidth }),
  ...(params.borderColor && { borderColor: params.borderColor }),
});

export const createTextStyle = (params: {
  color: string;
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
}): TextStyle => ({
  color: params.color,
  fontSize: params.fontSize,
  fontWeight: params.fontWeight,
});
