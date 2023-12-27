import "@/assets/style.scss";

export const metadata = {
  title: "포트폴리오 사이트 만들기 🥺 Next-Site",
  description: "Sungsu's Portfolio",
  keywords: [
    "포트폴리오",
    "Portfolio",
    "Woodwerker",
    "Holzwerker",
    "Holzarbeit",
    "Schreiner",
    "Tischler",
    "usgnus",
    "Sungsu",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
