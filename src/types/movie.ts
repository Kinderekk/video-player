export type Author = {
  name: string;
  followersNumber: number;
  isFollowed: boolean;
  avatar: string;
}

export type RelatedMovie = {
  id: string;
  name: string;
  time: string;
  playedTimes: number;
}

export type Movie = {
  name: string;
  descrition: string;
  playedTimes: number;
  likes: number;
  comments: number;
  author: Author;
  uploadDate: string;
  relatedMovies: RelatedMovie[]
}