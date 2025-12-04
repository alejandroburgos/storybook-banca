import {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import React from "react";
import { TextInput } from "react-native";

import { InputRefHandles, TextInputPropTypes } from "../TextInput/CustomTextInput.types";
import CustomInputText from '../TextInput/CustomTextInput'

import ShowEye from "../../assets/icons/ShowEye";
import HideEye from "../../assets/icons/HideEye";

const PasswordInput: ForwardRefRenderFunction<
  InputRefHandles,
  TextInputPropTypes
> = ({ errorMessage, editable = true, ...props }, ref) => {
  const passwordRef = useRef<TextInput>(null);
  
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {

    if (showPassword) {
      const timer = setTimeout(() => {
        setShowPassword(false);
      }, 2500); 

      return () => clearTimeout(timer);
    }

  }, [showPassword])

  useImperativeHandle(ref, () => ({
    focus: () => passwordRef.current?.focus(),
    blur: () => passwordRef.current?.blur(),
    isFocused: () => passwordRef.current?.isFocused(),
  }));

  return (
    <CustomInputText
      ref={passwordRef}
      editable={editable}
      secureTextEntry={!showPassword}
      iconRight={
        showPassword ? <HideEye /> : <ShowEye />
      }
      onPress={() => {setShowPassword(!showPassword)}}
      errorMessage={errorMessage}
      {...props}
    />
  );
};

export default forwardRef(PasswordInput);
