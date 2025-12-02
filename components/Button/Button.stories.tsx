import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';
import { View } from 'react-native';
import { MyButton } from './Button';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';
import { HomeIcon } from '../Icon/Icon';

const meta = {
  title: 'Button',
  component: MyButton,
  args: {
    label: 'Hello world',
    onPress: fn(),
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ padding: 16 }}>
          <ThemeSelector />
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Press me',
  },
};

// Theme Variants
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
  },
};

// Style Variants
export const Solid: Story = {
  args: {
    label: 'Solid Button',
    styleVariant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    styleVariant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    styleVariant: 'ghost',
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
};

// With Icons
export const WithIconLeft: Story = {
  args: {
    label: 'Button with Icon',
    icon: <HomeIcon size={20} color="#FFFFFF" />,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Button with Icon',
    icon: <HomeIcon size={20} color="#FFFFFF" />,
    iconPosition: 'right',
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
    variant: 'primary',
  },
};

export const CustomColors: Story = {
  args: {
    label: 'Custom Button',
    bgColor: '#4A90E2',
    boxShadowColor: '#2C5282',
    textColor: '#FFFFFF',
  },
};
