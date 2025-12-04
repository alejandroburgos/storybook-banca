import { TextInputPropTypes } from "../TextInput/CustomTextInput.types";

export type AnimatedTextInputPropTypes = TextInputPropTypes & {

    label: string;
    marginBottom?: number;
    isCentered?: boolean;
    disabled?: boolean;
};