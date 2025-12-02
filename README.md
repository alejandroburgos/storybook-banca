# 📱 Storybook Banca - Sistema de Componentes UI

Sistema de componentes UI escalable y componentizable para aplicaciones bancarias construido con React Native, Expo y Storybook.

![Storybook Banner](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

## 🎨 Características

- **Sistema de Temas Dinámico**: 4 temas pre-configurados (English, German, Norwegian, Dark)
- **Componentes Modulares**: Button, BottomNav, Icon
- **Tipado Completo**: TypeScript en todos los componentes
- **Arquitectura Escalable**: Separación en types, styles y componentes
- **Storybook Integrado**: Visualización y documentación interactiva
- **React Native + Expo**: Desarrollo multiplataforma

## 📦 Componentes Disponibles

### 🔘 Button
Botón personalizable con múltiples variantes y tamaños.

**Características:**
- 3 tamaños: `small`, `medium`, `large`
- 3 variantes de estilo: `solid`, `outline`, `ghost`
- 4 temas de color: `primary`, `secondary`, `tertiary`
- Soporte de iconos (izquierda/derecha)
- Estados: normal, disabled, fullWidth

**Uso:**
```tsx
import { MyButton } from './components/Button/Button';

<MyButton 
  label="Mi Botón"
  variant="primary"
  size="medium"
  styleVariant="solid"
  onPress={() => console.log('pressed')}
/>
```

### 🧭 BottomNav
Navegación inferior con iconos SVG personalizados.

**Características:**
- Fondo personalizado (#F6F5EE)
- Iconos activos: naranja (#EE8446)
- Iconos inactivos: gris (#575651)
- Soporte de labels opcional
- Altura y border radius personalizables

**Uso:**
```tsx
import { BottomNav } from './components/BottomNav/BottomNav';

<BottomNav
  items={[
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'transfer', label: 'Transfer', icon: 'transfer' },
    { id: 'menu', label: 'Menu', icon: 'menu' },
  ]}
  activeId="home"
  onItemPress={(id) => console.log(id)}
/>
```

### 🎯 Icon
Componentes de iconos SVG con estados activo/inactivo.

**Iconos disponibles:**
- `home` - Casa
- `transfer` - Transferencia
- `menu` - Menú hamburguesa

**Uso:**
```tsx
import { Icon } from './components/Icon/Icon';

<Icon 
  name="home" 
  isActive={true}
  size={32}
/>
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Expo CLI

### Paso 1: Clonar el repositorio
```bash
git clone <repository-url>
cd storybook-banca
```

### Paso 2: Instalar dependencias
```bash
# Con npm
npm install

# Con yarn
yarn install
```

### Paso 3: Iniciar el proyecto

#### Modo App (Expo)
```bash
# Iniciar Expo
yarn start

# iOS
yarn ios

# Android
yarn android
```

#### Modo Storybook (On-Device)
```bash
# Storybook en dispositivo
yarn storybook

# iOS
yarn storybook:ios

# Android
yarn storybook:android
```

#### Modo Storybook (Web)
```bash
# Desarrollo
yarn storybook:web

# Build
yarn build-storybook
```

## 📁 Estructura del Proyecto

```
storybook-banca/
├── components/
│   ├── Button/
│   │   ├── Button.tsx          # Componente principal
│   │   ├── Button.types.ts     # Tipos TypeScript
│   │   ├── Button.styles.ts    # Estilos y helpers
│   │   └── Button.stories.tsx  # Historias de Storybook
│   ├── BottomNav/
│   │   ├── BottomNav.tsx
│   │   ├── BottomNav.types.ts
│   │   ├── BottomNav.styles.ts
│   │   └── BottomNav.stories.tsx
│   └── Icon/
│       ├── Icon.tsx
│       ├── Icon.types.ts
│       ├── Icon.styles.ts
│       └── Icon.stories.tsx
├── theme/
│   ├── colors.ts              # Configuración de temas
│   ├── ThemeContext.tsx       # Context de React para temas
│   └── ThemeSelector.tsx      # Selector visual de temas
├── app/
│   └── (storybook)/          # Configuración Expo Router
└── .storybook/               # Configuración Storybook
```

## 🎨 Sistema de Temas

El proyecto incluye un sistema de temas global basado en React Context:

```typescript
// Temas disponibles
themes = {
  english: { primary, secondary, tertiary },
  german: { primary, secondary, tertiary },
  norwegian: { primary, secondary, tertiary },
  dark: { primary, secondary, tertiary }
}
```

Cada variante incluye:
- `bg` - Color de fondo
- `text` - Color de texto
- `shadow` - Color de sombra

### Usar el sistema de temas

```tsx
import { useTheme } from './theme/ThemeContext';

const MyComponent = () => {
  const { theme, currentTheme, setTheme } = useTheme();
  
  // Cambiar tema
  setTheme('dark');
  
  // Usar colores del tema
  const colors = theme.primary;
  // colors.bg, colors.text, colors.shadow
};
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
yarn start              # Iniciar Expo app
yarn storybook         # Storybook on-device
yarn storybook:web     # Storybook web

# Plataformas específicas
yarn ios               # Ejecutar en iOS
yarn android           # Ejecutar en Android
yarn web              # Ejecutar en web

# Storybook
yarn storybook-generate # Generar índice de stories
yarn build-storybook   # Build para producción
```

## 📝 Agregar Nuevos Componentes

### 1. Crear estructura de archivos
```bash
components/
└── NuevoComponente/
    ├── NuevoComponente.tsx
    ├── NuevoComponente.types.ts
    ├── NuevoComponente.styles.ts
    └── NuevoComponente.stories.tsx
```

### 2. Definir tipos (*.types.ts)
```typescript
export type NuevoComponenteProps = {
  // Props aquí
};
```

### 3. Definir estilos (*.styles.ts)
```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Estilos aquí
});
```

### 4. Crear componente (*.tsx)
```typescript
import { NuevoComponenteProps } from './NuevoComponente.types';
import { styles } from './NuevoComponente.styles';

export const NuevoComponente = (props: NuevoComponenteProps) => {
  // Implementación
};
```

### 5. Crear stories (*.stories.tsx)
```typescript
import type { Meta, StoryObj } from '@storybook/react-native';
import { NuevoComponente } from './NuevoComponente';

const meta = {
  title: 'NuevoComponente',
  component: NuevoComponente,
} satisfies Meta<typeof NuevoComponente>;

export default meta;
```

### 6. Actualizar stories
```bash
yarn storybook-generate
```

## 🧪 Testing con Storybook

Storybook incluye addons para testing interactivo:
- **Controls**: Modificar props en tiempo real
- **Actions**: Ver eventos y callbacks
- **Backgrounds**: Probar con diferentes fondos
- **Notes**: Documentación adicional

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT

## 🔗 Enlaces Útiles

- [Expo Documentation](https://docs.expo.dev/)
- [Storybook for React Native](https://storybook.js.org/docs/react-native/get-started/introduction)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
