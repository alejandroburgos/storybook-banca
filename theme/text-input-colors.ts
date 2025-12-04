import { RegionType } from "./region.types";

// text-input-colors.ts
export const textInputColors = {
  english: {
    default: {
      bg: "#F6F5EE",
      text: "#575651",
      placeholder: "#8E8D87",
    },

    disabled: {
      bg: "#E9E8E2",
      text: "#A3A29C",
      placeholder: "#C1C0BB",
    },
  },

  german: {
    default: {
      bg: "#FAF7EF",
      text: "#3A362C",
      placeholder: "#8A8578",
    },
    disabled: {
      bg: "#EEECE5",
      text: "#A09C8F",
      placeholder: "#C5C1B6",
    },
  },

  norwegian: {
    default: {
      bg: "#F7F9FC",
      text: "#243554",
      placeholder: "#7C889D",
    },
    disabled: {
      bg: "#ECEFF3",
      text: "#9AA2AD",
      placeholder: "#C2C7D0",
    },
  },

  dark: {
    default: {
      bg: "#2A2A2A",
      text: "#FFFFFF",
      placeholder: "#B5B5B5",
    },
    disabled: {
      bg: "#1E1E1E",
      text: "#7F7F7F",
      placeholder: "#9B9B9B",
    },
  },

  newDesign: {
    default: {
      bg: "#FFFFFF",
      text: "#202020",
      placeholder: "#646464",
      borderColor: "#202020",
      borderWidth: 1,
    },
    disabled: {
      bg: "#FFF",
      text: "#646464",
      placeholder: "#646464",
      borderColor: "#646464",
      borderWidth: 1,
    },
  },
} as const;

export type TextInputRegion = RegionType;
export type TextInputState = "default" | "disabled";
export type TextInputColorSet = {
  bg: string;
  text: string;
  placeholder: string;
};