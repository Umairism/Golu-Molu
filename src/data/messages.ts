export interface Message {
  id: number;
  text: string;
  date: string;
  sender: 'me' | 'you';
}

export const messages: Message[] = [
  {
    id: 1,
    text: "I never thought distance could bring two people closer.",
    date: "March 20, 2024",
    sender: 'you'
  },
  {
    id: 2,
    text: "Every call with you feels like coming home.",
    date: "April 15, 2024",
    sender: 'me'
  },
  {
    id: 3,
    text: "I miss you even when I'm talking to you.",
    date: "May 8, 2024",
    sender: 'you'
  },
  {
    id: 4,
    text: "You're the reason I believe in us.",
    date: "June 25, 2024",
    sender: 'me'
  },
  {
    id: 5,
    text: "Distance is just a test to see how far love can travel.",
    date: "August 12, 2024",
    sender: 'you'
  },
  {
    id: 6,
    text: "I carry you with me in everything I do.",
    date: "October 3, 2024",
    sender: 'me'
  },
  {
    id: 7,
    text: "You make the wait worth it.",
    date: "December 18, 2024",
    sender: 'you'
  }
];
