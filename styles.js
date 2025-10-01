import { StyleSheet } from 'react-native';

// --- Paleta de Colores ---
// Organizar los colores aquí hace que sea más fácil cambiarlos en el futuro.
const colors = {
  primary: '#7e42d1ff', // Un morado vibrante como color principal
  primaryDark: '#3700B3',
  background: '#F7F9FC', // Un fondo blanco hueso muy claro
  surface: '#FFFFFF', // Para elementos como la tarjeta del formulario
  text: '#333333', // Un gris oscuro para el texto, más suave que el negro puro
  placeholder: '#A9A9A9', // Un gris más claro para los placeholders
  border: '#E0E0E0', // Un color de borde sutil
  white: '#FFFFFF',
};

// --- Estilos Mejorados ---
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  // Contenedor para el formulario con sombra para darle profundidad
  formContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, // Sombra para Android
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: colors.background, // Un color de fondo sutil para el input
    height: 55,
    width: '100%',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.text,
  },
  // (Opcional) Puedes añadir un estilo para cuando el input está enfocado
  // inputFocused: {
  //   borderColor: colors.primary,
  //   borderWidth: 2,
  // },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    // Sombra para el botón para que resalte
    shadowColor: colors.primaryDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700', // Un poco más grueso
  },
});
