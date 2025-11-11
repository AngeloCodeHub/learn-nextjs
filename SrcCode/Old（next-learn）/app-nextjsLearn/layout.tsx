import "@/app/ui/global.css";
import { zenMaruGothic } from "@/app/ui/fonts";
// console.log(zenMaruGothic)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body className={`${zenMaruGothic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
