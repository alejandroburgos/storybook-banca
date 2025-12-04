import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import CustomTextInput from "../TextInput/CustomTextInput";
import { InputRefHandles } from '../TextInput/CustomTextInput.types'
import { AnimatedTextInputPropTypes } from "./AnimatedTextInput.types";
import { styles } from "./AnimatedTextInput.styles";

import { useTheme } from '../../theme/ThemeContext'

const ANIMATION_DURATION = 100;
const ERROR_LINE_HEIGHT = 20;

const AnimatedTextInputBase: ForwardRefRenderFunction<
  InputRefHandles,
  AnimatedTextInputPropTypes
> = ({ errorMessage, value, isCentered, label, disabled, marginBottom, onBlur, placeholder, ...rest }, ref) => {
  
  const inputRef = useRef<InputRefHandles>(null);

    const { theme } = useTheme();

  // Animations state
  const [animatedLabelTopPosition, setAnimatedLabelTopPosition] = useState(12);
  const [animatedFontSize, setAnimatedFontSize] = useState<number>(theme.fontSize.m);
  const [errorMessageTopPosition, setErrorMessageTopPosition] = useState(-5);
  const [errorHeightAnimation, setErrorHeightAnimation] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [shouldShowPlaceholder, setShouldShowPlaceholder] = useState(false);
  const [textWidth, setTextWidth] = useState(0);

  const { width } = useWindowDimensions();

  // Forward ref to parent
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    isFocused: () => inputRef.current?.isFocused(),
  }));

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setTextWidth(nativeEvent.layout.width);
  };

  const centerOffset =
    (width - theme.screenPaddingHorizontal * 2) / 2 - textWidth / 2;

  const getErrorMessageHeight = (length: number) => {
    const max = width < 380 ? 48 : 50;
    if (length > max && length < max * 2) return ERROR_LINE_HEIGHT * 2;
    if (length > max * 2) return ERROR_LINE_HEIGHT * 3;
    return ERROR_LINE_HEIGHT;
  };

  // Anim: focus / blur
  const animateFocus = () => {
    setAnimatedFontSize(theme.fontSize.xs);
    setAnimatedLabelTopPosition(9);
  };

  const animateBlur = () => {
    setAnimatedFontSize(theme.fontSize.m);
    setAnimatedLabelTopPosition(15);
  };

  // Anim: error
  const animateErrorShow = () => {
    setErrorMessageTopPosition(5);
    errorMessage &&
      setErrorHeightAnimation(getErrorMessageHeight(errorMessage.length));
  };

  const animateErrorHide = () => {
    setErrorMessageTopPosition(-5);
    setErrorHeightAnimation(0);
  };

  // reactions
  useEffect(() => {
    if (isFocused || value !== "") animateFocus();
    else animateBlur();
  }, [isFocused, value]);

  useEffect(() => {
    if (errorMessage) animateErrorShow();
    else animateErrorHide();
  }, [errorMessage]);

  // styles
  const reLabel = useAnimatedStyle(() => ({
    left: isCentered ? centerOffset : 16,
    transform: [
      { translateY: withTiming(animatedLabelTopPosition, { duration: ANIMATION_DURATION }) },
    ],
    fontSize: withTiming(animatedFontSize, { duration: ANIMATION_DURATION }),
  }));

  const reError = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(errorMessageTopPosition, { duration: 200 }) },
    ],
    height: withTiming(errorHeightAnimation, { duration: 200 }),
  }));

  // handlers
  const handleFocus = () => {
    setIsFocused(true);
    setShouldShowPlaceholder(true);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    setShouldShowPlaceholder(false);
    onBlur?.(e);
  };

  const finalPlaceholder = shouldShowPlaceholder ? placeholder : undefined;

  return (
    <View
    style={[
        styles.wrapper,
        { marginBottom: marginBottom ?? theme.spacing.m },
        { opacity: disabled ? 0.5 : 1 },                   
    ]}
    >      
      {/* LABEL */}
      <Animated.Text
        style={[{ position: "absolute" }, reLabel]}
        onLayout={onLayout}
        suppressHighlighting
        onPress={() => inputRef.current?.focus()}
      >
        {label}
      </Animated.Text>

      {/* INPUT (el tuyo custom) */}
      <CustomTextInput
        {...rest}
        ref={inputRef}
        value={value}
        placeholder={finalPlaceholder}
        errorMessage={errorMessage}
        editable={!disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* ERROR */}
      {errorMessage && (
        <Animated.Text
          accessibilityLabel={errorMessage}
          style={[reError, { flexWrap: "wrap" }]}
        >
          {errorMessage}
        </Animated.Text>
      )}
    </View>
  );
};

export default forwardRef(AnimatedTextInputBase);