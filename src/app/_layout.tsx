import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { AppNavigator } from '@/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Oculta el splash (Master Ball) cuando la app ya cargó
    SplashScreen.hideAsync();
  }, []);

  // Navegación con React Navigation (Stack: Pantalla 1 -> Pantalla 2)
  return <AppNavigator />;
}
