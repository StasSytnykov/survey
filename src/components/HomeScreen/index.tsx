import Link from "next/link";

import survey from "../../config/survey.json";

export const HomeScreen = () => (
  <section>
    <Link href={`/survey/${survey[0].id}`}>Let's start the survey!</Link>
  </section>
);
