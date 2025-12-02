import { IconName } from './Icon.types';

export type IconConfig = {
  name: IconName;
  label: string;
  description?: string;
};

export const availableIcons: IconConfig[] = [
  {
    name: 'home',
    label: 'Home',
    description: 'Icono de casa para navegación principal',
  },
  {
    name: 'transfer',
    label: 'Transfer',
    description: 'Icono de transferencia con flechas',
  },
  {
    name: 'menu',
    label: 'Menu',
    description: 'Icono de menú hamburguesa',
  },
];

// Helper para obtener todos los nombres de iconos
export const getIconNames = (): IconName[] => {
  return availableIcons.map((icon) => icon.name);
};

// Helper para obtener configuración de un icono
export const getIconConfig = (name: IconName): IconConfig | undefined => {
  return availableIcons.find((icon) => icon.name === name);
};
