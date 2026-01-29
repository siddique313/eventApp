import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import type { User } from "../types";

type Props = {
  users: User[];
  max?: number;
};

export function AttendeeAvatars({ users, max = 4 }: Props) {
  const visible = users.slice(0, max);
  const remaining = Math.max(0, users.length - visible.length);

  return (
    <View style={styles.row}>
      <View style={styles.stack}>
        {visible.map((u, idx) => (
          <Image
            key={u.id}
            source={{ uri: u.avatarUrl }}
            style={[styles.avatar, { marginLeft: idx === 0 ? 0 : -10 }]}
          />
        ))}
      </View>
      <Text style={styles.text}>
        {users.length}
        {remaining > 0 ? "+" : ""} going
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  stack: { flexDirection: "row", alignItems: "center" },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card2,
  },
  text: {
    ...typography.caption,
    color: colors.muted,
  },
});
