// src/types/Tweet.ts

export interface Image {
  url: string;
  altText: string;
}

export interface Tweet {
  id: string;
  title: string;
  username: string;
  content?: string;
  images?: Image[];
}
