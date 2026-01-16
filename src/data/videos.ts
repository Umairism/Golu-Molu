export interface Video {
  id: number;
  url: string;
  title: string;
}

export const videos: Video[] = [
  {
    id: 1,
    url: "/videos/moment1.mp4",
    title: "First Moment"
  },
  {
    id: 2,
    url: "/videos/moment2.mp4",
    title: "Second Moment"
  }
];

// Note: Place your video files in public/videos/
