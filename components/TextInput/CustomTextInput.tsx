import { ForwardRefRenderFunction, forwardRef, useRef, useImperativeHandle } from "react";
import { TextInput } from "react-native";

import { InputRefHandles, TextInputPropTypes } from "./CustomTextInput.types";
import { styles } from "./CustomTextInput.styles";

const CustomTextInput: ForwardRefRenderFunction<InputRefHandles, TextInputPropTypes> =
  ({ ...props }, ref) => {
    
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      isFocused: () => inputRef.current?.isFocused(),
    }));

    return (
      <TextInput
        ref={inputRef}
        style={[styles.base, props.errorMessage && styles.error]}
        {...props}
      />
    );
  };

export default forwardRef(CustomTextInput);