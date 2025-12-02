import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';
import { View } from 'react-native';
import { BottomNav } from './BottomNav';
import { ThemeProvider } from '../../theme/ThemeContext';

const meta = {
  title: 'BottomNav',
  component: BottomNav,
  args: {
    activeId: 'home',
    onItemPress: fn(),
    activeIconBg: false,
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ flex: 1, padding: 16 }}>
          <View style={{ flex: 1 }} />
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BottomNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const FourItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
      { id: 'home2', label: 'Home 2', icon: 'home' },
    ],
    activeId: 'transfer',
  },
};

export const FiveItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
      { id: 'home2', label: 'Home 2', icon: 'home' },
      { id: 'transfer2', label: 'Transfer 2', icon: 'transfer' },
    ],
    activeId: 'menu',
  },
};

export const NoIcons: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home' },
      { id: 'search', label: 'Search' },
      { id: 'profile', label: 'Profile' },
    ],
  },
};

export const NoLabels: Story = {
  args: {
    showLabels: false,
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
    ],
  },
};

export const NoActiveBackground: Story = {
  args: {
    activeIconBg: false,
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
    ],
    activeId: 'transfer',
  },
};

export const CustomHeight: Story = {
  args: {
    height: 90,
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
    ],
  },
};

export const LargeIcons: Story = {
  args: {
    iconSize: 32,
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'transfer', label: 'Transfer', icon: 'transfer' },
      { id: 'menu', label: 'Menu', icon: 'menu' },
    ],
  },
};
