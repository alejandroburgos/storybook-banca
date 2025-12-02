import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Icon } from '../Icon/Icon';
import { BottomNavProps, NavItemProps } from './BottomNav.types';
import { styles, createContainerStyle, createIconContainerStyle, createLabelStyle } from './BottomNav.styles';

const NavItemComponent: React.FC<NavItemProps> = ({
  item,
  isActive,
  onPress,
  themeColors,
  iconSize,
  showLabel,
  activeIconBg,
}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7}>
      {item.icon && (
        <View style={styles.iconContainer}>
          <Icon
            name={item.icon}
            isActive={isActive}
            size={iconSize}
            activeColor="#EE8446"
            inactiveColor="#575651"
          />
        </View>
      )}
      {showLabel && (
        <Text
          style={[
            styles.label,
            createLabelStyle({
              color: isActive ? "#EE8446" : "#575651",
              isActive,
            }),
          ]}
        >
          {item.label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  onItemPress,
  variant = 'secondary',
  height = 70,
  borderRadius = 20,
  iconSize = 24,
  showLabels = true,
  activeIconBg = true,
}) => {
  const { theme } = useTheme();
  const themeColors = theme[variant];

  return (
    <View
      style={[
        styles.container,
        createContainerStyle({
          backgroundColor: '#F6F5EE',
          height,
          borderRadius,
          shadowColor: '#CEC6B2',
        }),
      ]}
    >
      {items.map((item) => (
        <NavItemComponent
          key={item.id}
          item={item}
          isActive={item.id === activeId}
          onPress={() => onItemPress(item.id)}
          themeColors={themeColors}
          iconSize={iconSize}
          showLabel={showLabels}
          activeIconBg={activeIconBg}
        />
      ))}
    </View>
  );
};
