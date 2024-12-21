import type { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

import { Header } from "@/src/components/Header";
import { StoreProvider } from "@/src/providers/StoreProvider";

import "@/src/styles/globals.css";
import styles from "@/src/styles/layout.module.css";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <StoreProvider>
      <html lang="en" className={openSans.className}>
        <body>
          <header className={styles.header}>
            <Header />
          </header>
          <div className={styles.container}>
            <main className={styles.main}>{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
