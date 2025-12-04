import { TextInputProps } from 'react-native';

export type InputRefHandles = {
  isFocused: () => boolean | undefined;
  focus: () => void;
  blur: () => void;
};

export type TextInputPropTypes = TextInputProps & {
  accessibilityLabel: string;
  errorMessage?: string;
};