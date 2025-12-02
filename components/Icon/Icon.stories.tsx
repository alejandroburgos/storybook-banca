import type { Meta, StoryObj } from '@storybook/react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon } from './Icon';
import { IconName } from './Icon.types';
import { availableIcons } from './iconRegistry';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';

const meta = {
  title: 'Icon',
  component: Icon,
  args: {
    name: 'home',
    isActive: false,
    size: 32,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ padding: 16 }}>
          <ThemeSelector />
          <View style={styles.storyContainer}>
            <Story />
          </View>
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'home',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    name: 'home',
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    name: 'home',
    isActive: false,
  },
};

export const LargeSize: Story = {
  args: {
    name: 'transfer',
    isActive: true,
    size: 48,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'menu',
    isActive: false,
    size: 20,
  },
};

// Selector interactivo de iconos
export const IconSelector: Story = {
  args: {
    name: 'home',
  },
  render: () => {
    const [selectedIcon, setSelectedIcon] = useState<IconName>('home');
    const [isActive, setIsActive] = useState(false);
    const [size, setSize] = useState(32);

    return (
      <View style={styles.selectorContainer}>
        <Text style={styles.title}>Icon Selector</Text>
        
        {/* Control de estado activo/inactivo */}
        <View style={styles.controls}>
          <Text style={styles.controlLabel}>Estado:</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.controlButton, !isActive && styles.controlButtonActive]}
              onPress={() => setIsActive(false)}
            >
              <Text style={[styles.controlButtonText, !isActive && styles.controlButtonTextActive]}>
                Inactive
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlButton, isActive && styles.controlButtonActive]}
              onPress={() => setIsActive(true)}
            >
              <Text style={[styles.controlButtonText, isActive && styles.controlButtonTextActive]}>
                Active
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Control de tamaño */}
        <View style={styles.controls}>
          <Text style={styles.controlLabel}>Tamaño: {size}px</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.controlButton, size === 20 && styles.controlButtonActive]}
              onPress={() => setSize(20)}
            >
              <Text style={[styles.controlButtonText, size === 20 && styles.controlButtonTextActive]}>20</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlButton, size === 32 && styles.controlButtonActive]}
              onPress={() => setSize(32)}
            >
              <Text style={[styles.controlButtonText, size === 32 && styles.controlButtonTextActive]}>32</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlButton, size === 48 && styles.controlButtonActive]}
              onPress={() => setSize(48)}
            >
              <Text style={[styles.controlButtonText, size === 48 && styles.controlButtonTextActive]}>48</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Vista previa del icono seleccionado */}
        <View style={styles.preview}>
          <Icon name={selectedIcon} isActive={isActive} size={size} />
          <Text style={styles.previewLabel}>
            {availableIcons.find(i => i.name === selectedIcon)?.label}
          </Text>
          <Text style={styles.previewState}>
            {isActive ? 'Active (#EE8446)' : 'Inactive (#575651)'}
          </Text>
        </View>

        {/* Selector de iconos */}
        <Text style={styles.sectionTitle}>Seleccionar Icono:</Text>
        <View style={styles.iconGrid}>
          {availableIcons.map((iconConfig) => (
            <TouchableOpacity
              key={iconConfig.name}
              style={[
                styles.iconBox,
                selectedIcon === iconConfig.name && styles.iconBoxSelected,
              ]}
              onPress={() => setSelectedIcon(iconConfig.name)}
            >
              <Icon name={iconConfig.name} isActive={isActive} size={32} />
              <Text style={styles.iconLabel}>{iconConfig.label}</Text>
              {iconConfig.description && (
                <Text style={styles.iconDescription}>{iconConfig.description}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  selectorContainer: {
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  controls: {
    gap: 8,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  controlButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  controlButtonActive: {
    backgroundColor: '#EE8446',
    borderColor: '#EE8446',
  },
  controlButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  controlButtonTextActive: {
    color: '#fff',
  },
  preview: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    gap: 8,
  },
  previewLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  previewState: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  iconBox: {
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    minWidth: 120,
    flex: 1,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  iconBoxSelected: {
    borderColor: '#EE8446',
    backgroundColor: '#FFF5EF',
  },
  iconLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  iconDescription: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
});
