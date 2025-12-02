import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { MyButtonProps } from './Button.types';
import { styles, buttonSizes, createContainerStyle, createTextStyle } from './Button.styles';

export const MyButton = ({
  onPress,
  label,
  variant = 'primary',
  styleVariant = 'solid',
  size = 'medium',
  bgColor,
  boxShadowColor,
  borderRadius = 10,
  textColor,
  fontSize,
  fontWeight = 'bold',
  paddingHorizontal,
  paddingVertical,
  disabled = false,
  width,
  elevation = 4,
  fullWidth = false,
  icon,
  iconPosition = 'left',
}: MyButtonProps) => {
  const { theme } = useTheme();
  const themeColors = theme[variant];
  const sizeConfig = buttonSizes[size];

  // Determine colors based on style variant
  const getColors = () => {
    switch (styleVariant) {
      case 'outline':
        return {
          bg: 'transparent',
          text: textColor || themeColors.bg,
          borderWidth: 2,
          borderColor: themeColors.bg,
        };
      case 'ghost':
        return {
          bg: 'transparent',
          text: textColor || themeColors.bg,
          borderWidth: 0,
        };
      case 'solid':
      default:
        return {
          bg: bgColor || themeColors.bg,
          text: textColor || themeColors.text,
          borderWidth: 0,
        };
    }
  };

  const colors = getColors();

  const containerStyle = createContainerStyle({
    backgroundColor: colors.bg,
    borderRadius,
    shadowColor: boxShadowColor || themeColors.shadow,
    elevation: styleVariant === 'ghost' ? 0 : elevation,
    width: fullWidth ? '100%' : width,
    paddingHorizontal: paddingHorizontal ?? sizeConfig.paddingHorizontal,
    paddingVertical: paddingVertical ?? sizeConfig.paddingVertical,
    borderWidth: colors.borderWidth,
    borderColor: colors.borderColor,
  });

  const textStyle = createTextStyle({
    color: colors.text,
    fontSize: fontSize ?? sizeConfig.fontSize,
    fontWeight,
  });

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, fullWidth && styles.fullWidth, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && iconPosition === 'left' && <View style={styles.iconLeft}>{icon}</View>}
      <Text style={[styles.text, textStyle]}>{label}</Text>
      {icon && iconPosition === 'right' && <View style={styles.iconRight}>{icon}</View>}
    </TouchableOpacity>
  );
};
