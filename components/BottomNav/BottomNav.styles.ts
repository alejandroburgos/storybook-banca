import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
  },
  activeLabel: {
    fontWeight: 'bold',
  },
  inactiveLabel: {
    opacity: 0.7,
  },
});

export const createContainerStyle = (params: {
  backgroundColor: string;
  height: number;
  borderRadius: number;
  shadowColor: string;
}) => ({
  backgroundColor: params.backgroundColor,
  height: params.height,
  borderTopLeftRadius: params.borderRadius,
  borderTopRightRadius: params.borderRadius,
  shadowColor: params.shadowColor,
});

export const createIconContainerStyle = (params: {
  isActive: boolean;
  backgroundColor: string;
  showBackground: boolean;
}) => ({
  backgroundColor: params.isActive && params.showBackground ? params.backgroundColor : 'transparent',
});

export const createLabelStyle = (params: {
  color: string;
  isActive: boolean;
}) => ({
  color: params.color,
  fontWeight: params.isActive ? ('bold' as const) : ('normal' as const),
  opacity: params.isActive ? 1 : 0.7,
});
