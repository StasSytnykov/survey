import type { ReactNode } from "react";

import { Header } from "@/src/components/Header";
import { StoreProvider } from "@/src/providers/StoreProvider";

import "@/src/styles/globals.css";
import styles from "@/src/styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
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
}
