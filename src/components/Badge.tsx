import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

type Props = {
  label: string;
  variant: "free" | "paid";
  style?: ViewStyle;
};

export function Badge({ label, variant, style }: Props) {
  const bg =
    variant === "free" ? "rgba(45,212,191,0.14)" : "rgba(251,191,36,0.14)";
  const border =
    variant === "free" ? "rgba(45,212,191,0.35)" : "rgba(251,191,36,0.35)";
  const text = variant === "free" ? colors.success : colors.warning;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bg, borderColor: border },
        style,
      ]}
    >
      <Text style={[styles.text, { color: text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radius.xl,
    borderWidth: 1,
  },
  text: {
    ...typography.caption,
  },
});
