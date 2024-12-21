import { ScreenData } from "@/src/types";

import survey from "../../../src/config/survey.json";
import { SurveyScreen } from "@/src/components/SurveyScreen";

export async function generateStaticParams() {
  return survey.map((question) => ({
    id: question.id,
  }));
}

const getQuestion = (id: string): ScreenData => {
  const screenData = survey.find((q) => q.id === id);
  if (!screenData) {
    throw new Error(`Question with id "${id}" not found.`);
  }
  return screenData as ScreenData;
};

interface Params {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Params) => {
  const { id } = await params;
  const screenData = getQuestion(id);

  return <SurveyScreen screenData={screenData} />;
};

export default Page;
