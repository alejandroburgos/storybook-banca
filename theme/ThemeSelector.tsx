import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';
import { ThemeName } from './colors';

export const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  const themes: ThemeName[] = ['english', 'german', 'norwegian', 'dark'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Theme:</Text>
      <View style={styles.buttonsContainer}>
        {themes.map((theme) => (
          <TouchableOpacity
            key={theme}
            style={[
              styles.button,
              currentTheme === theme && styles.activeButton,
            ]}
            onPress={() => setTheme(theme)}
          >
            <Text
              style={[
                styles.buttonText,
                currentTheme === theme && styles.activeButtonText,
              ]}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  buttonText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  activeButtonText: {
    color: '#fff',
  },
});
