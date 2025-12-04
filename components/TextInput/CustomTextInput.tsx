import {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import React from "react";
import { TextInput, Touchable, View, TouchableOpacity } from "react-native";

import { InputRefHandles, TextInputPropTypes } from "./CustomTextInput.types";
import { styles } from "./CustomTextInput.styles";

import { useTheme } from "../../theme/ThemeContext";
import { textInputColors } from "../../theme/text-input-colors";

const CustomTextInput: ForwardRefRenderFunction<
  InputRefHandles,
  TextInputPropTypes
> = ({ errorMessage, editable = true, ...props }, ref) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = React.useState(false);

  const { currentTheme } = useTheme();

  const getState = () => {
    if (!editable) return "disabled";
    return "default";
  };

  const currentState = getState();
  const colors = textInputColors[currentTheme][currentState];

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    isFocused: () => inputRef.current?.isFocused(),
  }));

  const handleFocus = (e: any) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <View style={[
      styles.WrapperBase,
      {
            backgroundColor: colors.bg,
            borderStyle: "solid",
            borderWidth: (colors as any).borderWidth ?? (errorMessage || isFocused ? 1 : 0),
            borderColor: errorMessage
              ? "red"
              : isFocused
              ? "#2656C9"
              : (colors as any).borderColor ?? "transparent",
            opacity: editable ? 1 : 0.6,
          },
    ]} 
      >

      {
        props.iconLeft ? 
        
        <View>
          <TouchableOpacity disabled={!editable || props.onPress === undefined} onPress={props.onPress}>
          {props.iconLeft}
          </TouchableOpacity>
        </View> 
        
        : null
      }

      <TextInput
        ref={inputRef}
        editable={editable}
        placeholderTextColor={colors.placeholder}
        style={[
          styles.TextInputBase,
          { color: colors.text },
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        underlineColorAndroid="transparent"
        {...props}
      />

      {props.iconRight ? 
      
        <View>
          <TouchableOpacity disabled={!editable || props.onPress === undefined} onPress={props.onPress}>
          {props.iconRight}
          </TouchableOpacity>
        </View> 
      
      : null}

    </View>
  );
};

export default forwardRef(CustomTextInput);
