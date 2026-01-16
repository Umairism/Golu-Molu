export interface Photo {
  id: number;
  url: string;
  caption?: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    url: "/photos/photo1.jpg",
    caption: "The beginning"
  },
  {
    id: 2,
    url: "/photos/photo2.jpg",
    caption: "A moment frozen in time"
  },
  {
    id: 3,
    url: "/photos/photo3.jpg",
    caption: "Your smile"
  },
  {
    id: 4,
    url: "/photos/photo4.jpg",
    caption: "Us"
  },
  {
    id: 5,
    url: "/photos/photo5.jpg",
    caption: "Forever"
  }
];

// Note: Place your photo files in public/photos/
