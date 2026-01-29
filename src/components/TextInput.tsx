import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

type Props = RNTextInputProps & {
  label?: string;
};

export function TextInput({
  label,
  style,
  placeholderTextColor,
  ...props
}: Props) {
  return (
    <View style={styles.wrap}>
      {label != null && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor ?? colors.subtle}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.lg },
  label: {
    ...typography.caption,
    color: colors.muted,
    marginBottom: spacing.xs,
    padding: 0,
    minHeight: 0,
  },
  input: {
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    minHeight: 52,
  },
});
