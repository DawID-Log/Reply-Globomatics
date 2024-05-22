import { Open_Sans } from "next/font/google";
import styles from "./rootStyle.module.css"
import Link from "next/link";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href="/home">Globomatics</Link>
          </h1>
          <h2>
            <Link className={styles.menuBarLink} href="/blog">Blog Page</Link>
          </h2>
          <h2>
            <Link className={styles.menuBarLink} href="/settings">settings Page</Link>
          </h2>
          <h2>
            <Link className={styles.menuBarLink} href="/conference">conference Page</Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
