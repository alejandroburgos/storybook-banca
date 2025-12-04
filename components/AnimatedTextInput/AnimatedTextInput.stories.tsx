import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import AnimatedTextInput from './AnimatedTextInput';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';

const meta: Meta<typeof AnimatedTextInput> = {
  title: 'Inputs/AnimatedTextInput',
  component: AnimatedTextInput,

  args: {
    label: 'Label',
    placeholder: '',
    value: '',
    editable: true,
    disabled: false,
    errorMessage: undefined,
    accessibilityLabel: 'animated-input',
    keyboardType: 'default',
    secureTextEntry: false,
    autoCapitalize: 'none',
    marginBottom: 16,
  },

  argTypes: {
    onChangeText: { action: 'changed' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },

    errorMessage: {
      control: 'text',
      description: 'Mensaje de error mostrado bajo el input',
    },

    disabled: {
      control: 'boolean',
    },
  },

  decorators: [
    (Story, context) => {
      const { args } = context;
      const [value, setValue] = useState(args.value || '');

      return (
        <ThemeProvider>
          <ThemeSelector />
          <View style={{ padding: 16 }}>
            <Story
              args={{
                ...args,
                value,
                onChangeText: (text: string) => {
                  setValue(text);
                  args.onChangeText?.(text);
                },
              }}
            />
          </View>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic input',
    placeholder: 'Write something…',
  },
};