import { AppThemeProvider } from '@/providers/AppThemeProvider';
import { SafeAreaBox } from '@/providers/SafeAreaBox';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppThemeProvider>
      <SafeAreaBox>
          <Stack >
            <Stack.Screen name='(app)' options={{ headerShown: false }} />
            <Stack.Screen name='other' />
            <Stack.Screen name="+not-found" />
          </Stack>
      </SafeAreaBox>
    </AppThemeProvider>

  );
}
