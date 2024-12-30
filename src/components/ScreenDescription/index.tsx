import { ScreenType } from "@/src/types";

import styles from "./index.module.css";

interface ScreenDescriptionProps {
  statement?: string;
  title: string;
  screenType?: ScreenType;
}

export const ScreenDescription = ({
  statement,
  title,
  screenType,
}: ScreenDescriptionProps) => (
  <>
    <h1 data-screen-type={screenType} className={styles.title}>
      {title}
    </h1>
    {statement && (
      <p data-screen-type={screenType} className={styles.statement}>
        {statement}
      </p>
    )}
  </>
);
