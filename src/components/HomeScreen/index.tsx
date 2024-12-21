import Link from "next/link";

import { Button } from "../Button";
import survey from "../../config/survey.json";

export const HomeScreen = () => (
  <section>
    <Button>
      <Link href={`/survey/${survey[0].id}`}>Let&apos;s start the survey!</Link>
    </Button>
  </section>
);
