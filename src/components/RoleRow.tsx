import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

type Props = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export function RoleRow({ label, checked, disabled, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.row,
        checked && styles.rowChecked,
        disabled && styles.rowDisabled,
        pressed && !disabled && { opacity: 0.9 },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked ? <View style={styles.dot} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 54,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowChecked: {
    borderColor: "rgba(124,77,255,0.55)",
    backgroundColor: "rgba(124,77,255,0.12)",
  },
  rowDisabled: {
    opacity: 0.6,
  },
  label: {
    ...typography.body,
    color: colors.text,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card2,
  },
  checkboxChecked: {
    borderColor: "rgba(124,77,255,0.7)",
    backgroundColor: "rgba(124,77,255,0.25)",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
