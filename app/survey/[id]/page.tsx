import { QuestionData } from "@/src/types";
import { SurveyScreen } from "@/src/components/SurveyScreen";

import survey from "../../../src/config/survey.json";

export async function generateStaticParams() {
  return survey.map((question) => ({
    id: question.id,
  }));
}

const getQuestion = (id: string): QuestionData => {
  const questionData = survey.find((q) => q.id === id);
  if (!questionData) {
    throw new Error(`Question with id "${id}" not found.`);
  }
  return questionData as QuestionData;
};

interface Params {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Params) => {
  const { id } = await params;
  const questionData = getQuestion(id);

  return <SurveyScreen questionData={questionData} />;
};

export default Page;
