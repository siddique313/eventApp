import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/colors";
import type { RootStackParamList } from "./types";
import { MyEventsScreen } from "../screens/MyEventsScreen";
import { EventDetailsScreen } from "../screens/EventDetailsScreen";
import { JoinEventScreen } from "../screens/JoinEventScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MyEvents"
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen
        name="MyEvents"
        component={MyEventsScreen}
        options={{ title: "My Events" }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: "Event Details" }}
      />
      <Stack.Screen
        name="JoinEvent"
        component={JoinEventScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}
