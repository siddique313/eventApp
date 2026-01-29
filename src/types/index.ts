export type EventFeeType = "free" | "paid";

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Role =
  | "Founder"
  | "Investors"
  | "Developers"
  | "Designers"
  | "PM/POs"
  | "Anyone";

export type Event = {
  id: string;
  title: string;
  organizerName: string;
  city: string;
  venueLine: string;
  startsAtIso: string; // ISO string
  endsAtIso?: string; // optional ISO string
  feeType: EventFeeType;
  feeLabel: string; // "Free" or "$25"
  imageUrl: string;
  description: string;
  attendeeIds: string[];
  isCurrent: boolean;
};
