"use client";

import { useState } from "react";

import { DefaultSurveyScreenProps } from "@/src/types";

import { ScreenDescription } from "../ScreenDescription";
import { TextInput } from "../TextInput";
import { Button } from "../Button";

export const TextInputScreen = ({
  title,
  statement,
  options,
  handleButtonClick,
}: DefaultSurveyScreenProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <ScreenDescription title={title} statement={statement} />
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        placeholder="Enter your answer here..."
      />
      <Button
        onClick={() =>
          handleButtonClick({
            label: inputValue,
            next: options[0].next,
          })
        }
      >
        <span>{options[0].label}</span>
      </Button>
    </>
  );
};
