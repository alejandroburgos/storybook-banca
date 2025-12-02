import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const iconSizes = {
  small: 20,
  medium: 24,
  large: 32,
  xlarge: 48,
} as const;

export const defaultColors = {
  active: '#EE8446',
  inactive: '#575651',
} as const;
