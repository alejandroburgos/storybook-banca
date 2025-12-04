import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  WrapperBase: {
    minHeight: 48,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  TextInputBase: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: -0.272,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
});