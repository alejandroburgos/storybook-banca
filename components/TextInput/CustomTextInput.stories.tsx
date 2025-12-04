import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import CustomTextInput from './CustomTextInput';
import { ThemeProvider } from '../../theme/ThemeContext';
import { ThemeSelector } from '../../theme/ThemeSelector';
import EmailIcon from '../../assets/icons/EmailIcon';

const meta: Meta<typeof CustomTextInput> = {
  title: 'Inputs/CustomTextInput',
  component: CustomTextInput,

  args: {
    placeholder: '',
    editable: true,
    errorMessage: undefined,
    accessibilityLabel: 'input',
    keyboardType: 'default',
    secureTextEntry: false,
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
    placeholder: 'Write something…',
  },
};

export const PreFilled: Story = {
  args: {
    placeholder: 'Write something…',
    value: 'Hello world',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Invalid input',
    errorMessage: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'You cannot type here',
    editable: false,
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: 'Enter your email…',
    keyboardType: 'email-address',
    iconLeft: <EmailIcon />,
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter password…',
    secureTextEntry: true,
  },
};
