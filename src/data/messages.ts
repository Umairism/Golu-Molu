export interface Message {
  id: number;
  text: string;
  date: string;
  sender: 'me' | 'you';
}

export const messages: Message[] = [
  {
    id: 1,
    text: "Tum nahi ho paas, par dil mein hamesha ho. Yeh doori bhi kuch nahi badal sakti.",
    date: "March 20, 2024",
    sender: 'you'
  },
  {
    id: 2,
    text: "Jab tum baat karti ho na, lagta hai jaise ghar aa gaya. Tumhari awaaz mein sukoon hai.",
    date: "April 15, 2024",
    sender: 'me'
  },
  {
    id: 3,
    text: "Pta hai? Tumhare sath baat kar k bhi tumhari yaad aati hai. Kitna ajeeb hai yeh sab.",
    date: "May 8, 2024",
    sender: 'you'
  },
  {
    id: 4,
    text: "Tum wajah ho k main is rishte pe yaqeen rakhta hun. Tum ho to sab mumkin lagta hai.",
    date: "June 25, 2024",
    sender: 'me'
  },
  {
    id: 5,
    text: "Yeh dooriyan sirf yeh dikhati hain k mohabbat kitni mazboot hai. Aur hamari bohot mazboot hai.",
    date: "August 12, 2024",
    sender: 'you'
  },
  {
    id: 6,
    text: "Main jahan bhi jaun, tum mere sath ho. Dil mein, khayalon mein, har jagah.",
    date: "October 3, 2024",
    sender: 'me'
  },
  {
    id: 7,
    text: "Intezar mushkil hai, par tumhare liye yeh intezar bhi pyara lagta hai. Tum ho to sab worth it hai.",
    date: "December 18, 2024",
    sender: 'you'
  }
];
