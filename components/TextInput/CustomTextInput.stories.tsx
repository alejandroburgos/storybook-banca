import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import CustomTextInput from './CustomTextInput';

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
  },

  decorators: [
    (Story, context) => {
      const { args } = context;
      const [value, setValue] = useState(args.value || '');

      return (
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
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter password…',
    secureTextEntry: true,
  },
};
