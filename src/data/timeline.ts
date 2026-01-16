export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "March 15, 2024",
    title: "First Conversation",
    description: "The day everything started. A simple message that changed everything."
  },
  {
    date: "April 2, 2024",
    title: "First Call",
    description: "Hearing your voice for the first time. The nervousness, the laughter, the connection."
  },
  {
    date: "June 20, 2024",
    title: "A Difficult Moment",
    description: "Distance felt impossible. But we chose to stay, to fight, to believe."
  },
  {
    date: "September 10, 2024",
    title: "A Meaningful Realization",
    description: "Understanding that love isn't about perfect moments, but about choosing each other every day."
  },
  {
    date: "January 20, 2026",
    title: "Today",
    description: "Here we are. Still choosing each other. Still believing in us."
  }
];
