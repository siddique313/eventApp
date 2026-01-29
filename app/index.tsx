import { useNavigation, useRouter } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAuth } from "../src/context/AuthContext";
import { MyEventsScreen } from "../src/screens/MyEventsScreen";
import { colors } from "../src/theme/colors";
import { typography } from "../src/theme/typography";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  useLayoutEffect(() => {
    if (user) {
      navigation.setOptions({
        headerRight: () => (
          <Pressable
            onPress={async () => {
              await logout();
              router.replace("/login");
            }}
            style={({ pressed }) => [
              pressed ? { opacity: 0.7 } : {},
              styles.logoutBtn,
            ]}
          >
            <Text style={styles.logoutText}>Log out</Text>
          </Pressable>
        ),
      });
    }
  }, [user, logout, navigation, router]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!user) {
    return null;
  }

  return <MyEventsScreen />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: { paddingHorizontal: 12, paddingVertical: 8 },
  logoutText: { ...typography.body, color: colors.primary },
});
