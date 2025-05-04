export type Category = "2D" | "3D";

export type Censorship =
  | "Livre"
  | "10 Anos"
  | "12 Anos"
  | "14 Anos"
  | "16 Anos";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  title: string;
  genre: string;
  category: Category;
  duration: number;
  censorship: Censorship;
}
