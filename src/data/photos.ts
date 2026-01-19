export interface Photo {
  id: number;
  url: string;
  caption?: string;
}

// Photos for "Him" (Golu)
export const hisPhotos: Photo[] = [
  {
    id: 1,
    url: "/photos/Me/21.png",
    caption: "Special moments"
  },
  {
    id: 2,
    url: "/photos/Me/19.jpg",
    caption: "Memories"
  },
  {
    id: 3,
    url: "/photos/Me/17.jpg",
    caption: "Good times"
  }
];

// Photos for "Her" (Molu)
export const herPhotos: Photo[] = [
  {
    id: 1,
    url: "/photos/Her/20.png",
    caption: "Beautiful moments"
  },
  {
    id: 2,
    url: "/photos/Her/6.jpg",
    caption: "Cherished memories"
  },
  {
    id: 3,
    url: "/photos/Her/10.jpg",
    caption: "Fun times"
  }
];

// Combined photos of both
export const combinedPhotos: Photo[] = [
  {
    id: 1,
    url: "/photos/2.jpg",
    caption: "Together forever"
  },
  {
    id: 2,
    url: "/photos/1.png",
    caption: "Our journey"
  }
];
