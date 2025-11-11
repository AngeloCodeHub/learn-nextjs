// import { Inter, Zen_Old_Mincho, Zen_Maru_Gothic } from "next/font/google";
import { Zen_Maru_Gothic, Zen_Old_Mincho } from "next/font/google";

// export const inter = Inter({ subsets: ["latin", "cyrillic-ext"] });
export const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: "400",
});
export const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin-ext"],
  weight: "500",
  style: "normal",
});
