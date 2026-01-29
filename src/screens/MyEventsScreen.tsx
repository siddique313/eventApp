import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { EventCard } from "../components/EventCard";
import { events } from "../data/events";
import { users } from "../data/users";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export function MyEventsScreen() {
  const router = useRouter();

  const usersById = useMemo(() => new Map(users.map((u) => [u.id, u])), []);
  const currentEvents = useMemo(() => events.filter((e) => e.isCurrent), []);
  const upcomingEvents = useMemo(() => events.filter((e) => !e.isCurrent), []);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={["current", "upcoming"] as const}
        keyExtractor={(k) => k}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          const list = item === "current" ? currentEvents : upcomingEvents;
          const title =
            item === "current" ? "Current Events" : "Upcoming Events";

          return (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={list}
                keyExtractor={(e) => e.id}
                contentContainerStyle={styles.hList}
                renderItem={({ item: ev, index }) => {
                  const attendeeUsers = ev.attendeeIds
                    .map((id) => usersById.get(id))
                    .filter(Boolean) as typeof users;

                  return (
                    <EventCard
                      event={ev}
                      attendees={attendeeUsers}
                      onPress={() => router.push(`/event-details/${ev.id}`)}
                      style={{ marginLeft: index === 0 ? 0 : spacing.md }}
                    />
                  );
                }}
              />
            </View>
          );
        }}
        ListHeaderComponent={<View style={styles.headerSpacer} />}
        ItemSeparatorComponent={() => <View style={{ height: spacing.xl }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xxl },
  headerSpacer: {
    height: spacing.md,
  },
  section: {
    backgroundColor: "transparent",
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  hList: {
    paddingRight: spacing.lg,
  },
});
