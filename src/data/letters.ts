export interface Letter {
  id: string;
  title: string;
  content: string;
  author: 'me' | 'you';
}

export const letters: Letter[] = [
  {
    id: 'from-me',
    title: 'From Me',
    author: 'me',
    content: `Dear Golu,

I've tried to write this a hundred times. Every word feels too small to hold what I feel.

This distance has taught me things I never wanted to learn how to miss someone so deeply it aches, how to find joy in a voice across miles, how to believe in something I can't touch.

But it's also shown me the truth: that you're worth every mile, every wait, every moment of longing.

You've become my constant. My hope. My reason to believe that some things are meant to be, even when they're hard.

Thank you for choosing me. For staying. For believing in us when it felt impossible.

I love you. Not just for who you are, but for who we've become together.

Always,
Molu`
  },
  {
    id: 'from-you',
    title: 'From You',
    author: 'you',
    content: `

This space is ready whenever you want to add their words.`
  }
];
