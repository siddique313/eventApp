import type { Event } from "../types";

export const events: Event[] = [
  {
    id: "e1",
    title: "Founders & Builders Night",
    organizerName: "Midnight Studio",
    city: "New York",
    venueLine: "SoHo · 99 Spring St",
    startsAtIso: "2026-02-06T18:30:00.000Z",
    endsAtIso: "2026-02-06T21:00:00.000Z",
    feeType: "free",
    feeLabel: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=70",
    description:
      "Meet founders, investors, and operators in a cozy, high-signal meetup. Expect quick intros, small-group chats, and a relaxed vibe.\n\nBring a 30-second intro and a curiosity-first mindset.",
    attendeeIds: ["u1", "u2", "u3", "u4", "u5"],
    isCurrent: true,
  },
  {
    id: "e2",
    title: "Design Systems After Dark",
    organizerName: "Pixel Guild",
    city: "San Francisco",
    venueLine: "SOMA · 2nd Street Loft",
    startsAtIso: "2026-02-01T02:00:00.000Z",
    endsAtIso: "2026-02-01T04:00:00.000Z",
    feeType: "paid",
    feeLabel: "$25",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=70",
    description:
      "A practical night on scaling design systems—tokens, components, governance, and adoption. Short talks + Q&A + networking.",
    attendeeIds: ["u2", "u3", "u5"],
    isCurrent: true,
  },
  {
    id: "e3",
    title: "Startup Hiring Mixer",
    organizerName: "LaunchWeek Community",
    city: "Austin",
    venueLine: "Downtown · Congress Ave",
    startsAtIso: "2026-02-20T23:00:00.000Z",
    endsAtIso: "2026-02-21T01:30:00.000Z",
    feeType: "free",
    feeLabel: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=70",
    description:
      "Founders and builders looking for their next teammate. Bring your portfolio, GitHub, or a short story about what you love building.",
    attendeeIds: ["u1", "u4"],
    isCurrent: false,
  },
  {
    id: "e4",
    title: "Product & Growth Roundtable",
    organizerName: "Signal Circle",
    city: "London",
    venueLine: "Shoreditch · Studio 12",
    startsAtIso: "2026-03-03T18:00:00.000Z",
    endsAtIso: "2026-03-03T20:00:00.000Z",
    feeType: "paid",
    feeLabel: "£15",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=70",
    description:
      "A curated roundtable on product strategy and sustainable growth. Limited seats for higher-quality conversations.",
    attendeeIds: ["u3", "u4", "u5"],
    isCurrent: false,
  },
  {
    id: "e5",
    title: "AI & ML Meetup",
    organizerName: "Neural Labs",
    city: "Seattle",
    venueLine: "Capitol Hill · The Collective",
    startsAtIso: "2026-02-14T19:00:00.000Z",
    endsAtIso: "2026-02-14T22:00:00.000Z",
    feeType: "free",
    feeLabel: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=70",
    description:
      "Hands-on demos and talks on LLMs, fine-tuning, and building AI products. Bring your laptop for the optional workshop.\n\nPizza and drinks provided.",
    attendeeIds: ["u1", "u2", "u3", "u4", "u5"],
    isCurrent: true,
  },
  {
    id: "e6",
    title: "Women in Tech Brunch",
    organizerName: "She Builds",
    city: "Chicago",
    venueLine: "River North · Allis Lounge",
    startsAtIso: "2026-02-08T15:00:00.000Z",
    endsAtIso: "2026-02-08T18:00:00.000Z",
    feeType: "paid",
    feeLabel: "$35",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=70",
    description:
      "A relaxed brunch for women in engineering, product, and design. Share stories, swap advice, and expand your network in a supportive setting.",
    attendeeIds: ["u2", "u3", "u5"],
    isCurrent: true,
  },
  {
    id: "e7",
    title: "Indie Hackers Coffee",
    organizerName: "Solo Founders Club",
    city: "Denver",
    venueLine: "RiNo · Blue Bottle Coffee",
    startsAtIso: "2026-02-22T16:00:00.000Z",
    endsAtIso: "2026-02-22T18:00:00.000Z",
    feeType: "free",
    feeLabel: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=70",
    description:
      "Casual coffee for bootstrappers and indie hackers. No pitch decks—just real talk about revenue, distribution, and staying sane.",
    attendeeIds: ["u1", "u4"],
    isCurrent: false,
  },
  {
    id: "e8",
    title: "DevOps & SRE Night",
    organizerName: "Infra Collective",
    city: "Boston",
    venueLine: "Cambridge · MIT Stata Center",
    startsAtIso: "2026-03-10T18:30:00.000Z",
    endsAtIso: "2026-03-10T21:00:00.000Z",
    feeType: "free",
    feeLabel: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70",
    description:
      "Talks on observability, Kubernetes, incident response, and platform engineering. Open to all levels—from on-call newbies to staff engineers.",
    attendeeIds: ["u1", "u2", "u3", "u5"],
    isCurrent: false,
  },
  {
    id: "e9",
    title: "Creative Coding Jam",
    organizerName: "Generative Art Club",
    city: "Los Angeles",
    venueLine: "Arts District · The Box",
    startsAtIso: "2026-03-15T20:00:00.000Z",
    endsAtIso: "2026-03-16T00:00:00.000Z",
    feeType: "paid",
    feeLabel: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=70",
    description:
      "An evening of live coding, visuals, and sound. Bring your own project or join a collaborative piece. p5.js, TouchDesigner, and more.",
    attendeeIds: ["u2", "u3", "u4"],
    isCurrent: false,
  },
  {
    id: "e10",
    title: "Angel Investing 101",
    organizerName: "First Check Fund",
    city: "Miami",
    venueLine: "Wynwood · The Lab",
    startsAtIso: "2026-03-22T17:00:00.000Z",
    endsAtIso: "2026-03-22T19:30:00.000Z",
    feeType: "paid",
    feeLabel: "$50",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70",
    description:
      "A primer on angel investing: deal flow, term sheets, and portfolio construction. Q&A with experienced angels and founders they've backed.",
    attendeeIds: ["u1", "u4", "u5"],
    isCurrent: false,
  },
];
