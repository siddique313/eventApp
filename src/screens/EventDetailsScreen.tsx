import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AttendeeAvatars } from "../components/AttendeeAvatars";
import { Badge } from "../components/Badge";
import { PrimaryButton } from "../components/PrimaryButton";
import { events } from "../data/events";
import { users } from "../data/users";
import type { RootStackParamList } from "../navigation/types";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { formatEventDateTime } from "../utils/date";

type DetailsRoute = RouteProp<RootStackParamList, "EventDetails">;

export function EventDetailsScreen() {
  const router = useRouter();
  const route = useRoute<DetailsRoute>();
  const eventId = (route.params as { eventId?: string })?.eventId;

  const event = useMemo(() => events.find((e) => e.id === eventId), [eventId]);
  const usersById = useMemo(() => new Map(users.map((u) => [u.id, u])), []);

  if (!event) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={{ color: colors.text }}>Event not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const attendeeUsers = event.attendeeIds
    .map((id) => usersById.get(id))
    .filter(Boolean) as typeof users;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroWrap}>
          <ImageBackground
            source={{ uri: event.imageUrl }}
            style={styles.hero}
            imageStyle={styles.heroRadius}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.80)"]}
              style={styles.heroGradient}
            />

            <View style={styles.heroTop}>
              <Badge
                label={event.feeLabel}
                variant={event.feeType === "free" ? "free" : "paid"}
              />
            </View>

            <View style={styles.heroBottom}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.organizer}>by {event.organizerName}</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.k}>Date & time</Text>
            <Text style={styles.v}>
              {formatEventDateTime(event.startsAtIso)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.k}>Location</Text>
            <Text style={styles.v}>
              {event.city} · {event.venueLine}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.k}>Event fee</Text>
            <Text style={styles.v}>{event.feeLabel}</Text>
          </View>
          <View style={{ marginTop: spacing.md }}>
            <AttendeeAvatars users={attendeeUsers} />
          </View>
        </View>

        <View style={[styles.card, { paddingTop: spacing.lg }]}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.desc}>{event.description}</Text>
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            label="I joined to meet"
            onPress={() => router.push(`/join-event/${event.id}`)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxl },
  heroWrap: { marginTop: spacing.sm },
  hero: { height: 280, width: "100%" },
  heroRadius: { borderRadius: radius.xl },
  heroGradient: { ...StyleSheet.absoluteFillObject, borderRadius: radius.xl },
  heroTop: { position: "absolute", top: spacing.md, left: spacing.md },
  heroBottom: {
    position: "absolute",
    left: spacing.md,
    right: spacing.md,
    bottom: spacing.md,
  },
  title: { ...typography.title, color: colors.text },
  organizer: { ...typography.body, color: colors.muted, marginTop: 6 },
  card: {
    marginTop: spacing.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  row: { gap: 6, marginBottom: spacing.md },
  k: { ...typography.caption, color: colors.subtle },
  v: { ...typography.body, color: colors.text },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  desc: { ...typography.body, color: colors.muted, lineHeight: 20 },
  footer: { marginTop: spacing.xl },
});
