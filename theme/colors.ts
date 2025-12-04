import { RegionType } from "./region.types";

export const themes = {
  english: {
    primary: {
      bg: '#DC9870',
      text: '#FFFFFF',
      shadow: '#CEC6B2',
    },
    secondary: {
      bg: '#E4C1A9',
      text: '#333333',
      shadow: '#CEC6B2',
    },
    tertiary: {
      bg: '#ECE9E1',
      text: '#333333',
      shadow: '#CEC6B2',
    },
  },
  german: {
    primary: {
      bg: '#D4AF37', // Dorado alemán
      text: '#000000',
      shadow: '#B8960F',
    },
    secondary: {
      bg: '#C41E3A', // Rojo alemán
      text: '#FFFFFF',
      shadow: '#8B1529',
    },
    tertiary: {
      bg: '#F0F0F0', // Gris claro
      text: '#333333',
      shadow: '#CCCCCC',
    },
  },
  norwegian: {
    primary: {
      bg: '#BA0C2F', // Rojo noruego
      text: '#FFFFFF',
      shadow: '#8B0922',
    },
    secondary: {
      bg: '#00205B', // Azul noruego
      text: '#FFFFFF',
      shadow: '#001840',
    },
    tertiary: {
      bg: '#FFFFFF', // Blanco
      text: '#00205B',
      shadow: '#E0E0E0',
    },
  },
  dark: {
    primary: {
      bg: '#1F1F1F',
      text: '#FFFFFF',
      shadow: '#000000',
    },
    secondary: {
      bg: '#2D2D2D',
      text: '#E0E0E0',
      shadow: '#0A0A0A',
    },
    tertiary: {
      bg: '#3A3A3A',
      text: '#CCCCCC',
      shadow: '#151515',
    },
  },
  newDesign: {
    primary: {
      bg: '#661700',
      text: '#FFFFFF',
      shadow: '#CEC6B2',
    },
    secondary: {
      bg: '#E4C1A9',
      text: '#333333',
      shadow: '#CEC6B2',
    },
    tertiary: {
      bg: '#ECE9E1',
      text: '#333333',
      shadow: '#CEC6B2',
    },
  },
} as const;

export type ThemeName = RegionType;
export type ThemeVariant = 'primary' | 'secondary' | 'tertiary';
