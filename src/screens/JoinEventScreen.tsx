import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { RoleRow } from "../components/RoleRow";
import { events } from "../data/events";
import { roles } from "../data/roles";
import type { RootStackParamList } from "../navigation/types";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import type { Role } from "../types";

type JoinRoute = RouteProp<RootStackParamList, "JoinEvent">;

const MAX = 3;

export function JoinEventScreen() {
  const router = useRouter();
  const route = useRoute<JoinRoute>();
  const event = useMemo(
    () => events.find((e) => e.id === route.params.eventId),
    [route.params.eventId],
  );

  const [selected, setSelected] = useState<Role[]>(["Anyone"]);

  const selectedSet = useMemo(() => new Set(selected), [selected]);

  function toggle(role: Role) {
    setSelected((prev) => {
      const set = new Set(prev);
      if (set.has(role)) {
        set.delete(role);
        return Array.from(set);
      }
      if (set.size >= MAX) return prev;
      set.add(role);
      return Array.from(set);
    });
  }

  const canSelectMore = selected.length < MAX;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.subtitle}>{event ? event.title : "Event"}</Text>
        <Text style={styles.title}>I joined this event to meet</Text>
        <Text style={styles.helper}>Select up to {MAX} roles</Text>

        <View style={styles.list}>
          {roles.map((r) => {
            const checked = selectedSet.has(r);
            const disabled = !checked && !canSelectMore;
            return (
              <View key={r} style={{ marginBottom: spacing.md }}>
                <RoleRow
                  label={r}
                  checked={checked}
                  disabled={disabled}
                  onPress={() => toggle(r)}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.footer}>
          <View style={styles.counterRow}>
            <Text style={styles.counter}>
              {selected.length}/{MAX} selected
            </Text>
          </View>
          <PrimaryButton
            label="Next"
            disabled={selected.length === 0}
            onPress={() => router.back()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, padding: spacing.lg },
  subtitle: {
    ...typography.caption,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  title: { ...typography.title, color: colors.text, marginTop: spacing.sm },
  helper: {
    ...typography.body,
    color: colors.muted,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  list: { flex: 1 },
  footer: { gap: spacing.md },
  counterRow: { alignItems: "flex-end" },
  counter: { ...typography.caption, color: colors.subtle },
});
