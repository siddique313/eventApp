import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../src/context/AuthContext";
import { colors } from "../src/theme/colors";

SplashScreen.preventAutoHideAsync();

function RootStack() {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading) return null;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "My Events", headerShown: true }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Sign in", headerShown: false }}
      />
      <Stack.Screen
        name="sign-up"
        options={{ title: "Create account", headerShown: false }}
      />
      <Stack.Screen
        name="event-details/[eventId]"
        options={{ title: "Event Details" }}
      />
      <Stack.Screen name="join-event/[eventId]" options={{ title: "" }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <RootStack />
    </AuthProvider>
  );
}
