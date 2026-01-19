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
    content: `Mere pyare Golu,

Kabhi kabhi lagta hai k alfaaz bhi kam par jate hain jo dil mein hai woh kehne ke liye.

Is doori ne mujhe sikhaya hai k kisi ko kitni shiddat se yaad kiya ja sakta hai. Tumhari awaaz mein kitna sukoon milta hai, chahe tum kitne bhi door ho. Maine seekha hai k kuch cheezein bina chue bhi mehsoos ki ja sakti hain.

Tum mere har intezar ki wajah ho. Har mile ka, har second ka.

Tum mere sukoon ban gaye ho. Meri wo wajah jo mujhe yaqeen dilati hai k kuch cheezein mushkil hone k bawajood bhi sahi hoti hain. Kuch rishte mushkil se guzar k aur bhi mazboot ho jate hain.

Shukriya k tumne mujhe chuna. Shukriya k tum rukay.

Tumhari hamesha ke liye,
Molu`
  },
  {
    id: 'from-you',
    title: 'From You',
    author: 'you',
    content: `This space waits for your words.`
  }
];
