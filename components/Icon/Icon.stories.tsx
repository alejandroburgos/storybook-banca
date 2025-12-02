import type { Meta, StoryObj } from '@storybook/react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, HomeIcon, TransferIcon, MenuIcon } from './Icon';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';

const meta = {
  title: 'Icon',
  component: Icon,
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

// Icon Component Stories
export const HomeActive: Story = {
  args: {
    name: 'home',
    isActive: true,
  },
};

export const HomeInactive: Story = {
  args: {
    name: 'home',
    isActive: false,
  },
};

export const TransferActive: Story = {
  args: {
    name: 'transfer',
    isActive: true,
  },
};

export const TransferInactive: Story = {
  args: {
    name: 'transfer',
    isActive: false,
  },
};

export const MenuActive: Story = {
  args: {
    name: 'menu',
    isActive: true,
  },
};

export const MenuInactive: Story = {
  args: {
    name: 'menu',
    isActive: false,
  },
};

export const CustomSize: Story = {
  args: {
    name: 'home',
    isActive: true,
    size: 48,
  },
};

export const CustomColors: Story = {
  args: {
    name: 'transfer',
    isActive: true,
    activeColor: '#FF0000',
    inactiveColor: '#0000FF',
  },
};

// Showcase all icons
export const AllIcons: Story = {
  args: {
    name: 'home',
  },
  render: () => (
    <View style={styles.showcase}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <HomeIcon color="#575651" size={32} />
          <Text style={styles.label}>Home Inactive</Text>
        </View>
        <View style={styles.iconBox}>
          <HomeIcon color="#EE8446" size={32} />
          <Text style={styles.label}>Home Active</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <TransferIcon color="#575651" size={29} />
          <Text style={styles.label}>Transfer Inactive</Text>
        </View>
        <View style={styles.iconBox}>
          <TransferIcon color="#EE8446" size={29} />
          <Text style={styles.label}>Transfer Active</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <MenuIcon color="#575651" size={29} />
          <Text style={styles.label}>Menu Inactive</Text>
        </View>
        <View style={styles.iconBox}>
          <MenuIcon color="#EE8446" size={29} />
          <Text style={styles.label}>Menu Active</Text>
        </View>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  showcase: {
    gap: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
  },
  iconBox: {
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    minWidth: 120,
  },
  label: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
