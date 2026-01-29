import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import type { Event, User } from "../types";
import { formatEventDateTime } from "../utils/date";
import { Badge } from "./Badge";
import { AttendeeAvatars } from "./AttendeeAvatars";

type Props = {
  event: Event;
  attendees: User[];
  onPress: () => void;
  style?: ViewStyle;
};

export function EventCard({ event, attendees, onPress, style }: Props) {
  const badgeVariant = event.feeType === "free" ? "free" : "paid";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.92 },
        style,
      ]}
    >
      <ImageBackground
        source={{ uri: event.imageUrl }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.72)"]}
          style={styles.gradient}
        />
        <View style={styles.topRow}>
          <Badge label={event.feeLabel} variant={badgeVariant} />
        </View>

        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {event.title}
          </Text>
          <Text style={styles.meta}>
            {formatEventDateTime(event.startsAtIso)}
          </Text>
          <Text style={styles.meta}>{event.city}</Text>
          <View style={{ marginTop: spacing.sm }}>
            <AttendeeAvatars users={attendees} />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 260,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    shadowColor: colors.shadow,
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
    overflow: "hidden",
  },
  image: {
    height: 320,
    width: "100%",
  },
  imageRadius: { borderRadius: radius.xl },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topRow: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
    right: spacing.md,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  content: {
    position: "absolute",
    bottom: spacing.md,
    left: spacing.md,
    right: spacing.md,
  },
  title: { ...typography.h2, color: colors.text },
  meta: { ...typography.body, color: colors.muted, marginTop: 6 },
});
