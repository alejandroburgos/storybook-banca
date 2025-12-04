import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import PasswordInput from './PasswordInput';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';

const meta: Meta<typeof PasswordInput> = {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,

  args: {
    placeholder: '',
    editable: true,
    errorMessage: undefined,
    accessibilityLabel: 'password input',
    keyboardType: 'default',
    autoCapitalize: 'none',
  },

argTypes: {
  onChangeText: { action: 'changed' },
  onFocus: { action: 'focus' },
  onBlur: { action: 'blur' },

  errorMessage: {
    control: 'text',
    description: 'Mensaje de error mostrado bajo el input',
  },

  accessibilityLabel: {
    control: 'text',
    description: 'Etiqueta de accesibilidad para lectores de pantalla',
  },

  iconLeft: {
    control: false,
    description: 'Icono mostrado a la izquierda del input (ReactNode)',
  },

  iconRight: {
    control: false,
    description: 'Icono mostrado a la derecha del input (ReactNode)',
  },

  onPress: {
    action: 'press',
    description: 'Se ejecuta cuando se presiona el iconRight/iconLeft',
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
    placeholder: 'Password…',
  },
};

export const PreFilled: Story = {
  args: {
    placeholder: 'Password…',
    value: '123456',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Password…',
    errorMessage: 'Password is invalid',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Password…',
    editable: false,
  },
};