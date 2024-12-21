import Link from "next/link";

import survey from "../../config/survey.json";
import { Button } from "../Button";

export const HomeScreen = () => (
  <section>
    <Button>
      <Link href={`/survey/${survey[0].id}`}>Let's start the survey!</Link>
    </Button>
  </section>
);
