"use client";

import { useState } from "react";

import { ArrowDownIcon } from "@heroicons/react/24/solid";

import { TextArea } from "@/components/ui/textarea";
import { ThoughtList } from "@/components/ThoughtList";

const HomePage = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  function onTextAreaInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setTextAreaValue(value);

    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  function addThought() {
    fetch(`/api/add-thought?text=${textAreaValue}`).catch(console.error);
  }
  return (
    <main>
      <div className="container max-w-screen-sm p-4 md:px-0">
        <div className="flex rounded-xl border border-border">
          <TextArea
            value={textAreaValue}
            onInput={onTextAreaInput}
            onChange={onTextAreaInput}
            placeholder="Get this shit off your mind"
            className="max-h-[25dvh] resize-none rounded-e-none rounded-s-xl border-0"
          />
          <button
            type="submit"
            disabled={!textAreaValue.length}
            className="w-fit rounded-e-xl bg-white p-3 text-background disabled:cursor-not-allowed disabled:opacity-50"
            onClick={addThought}
          >
            <ArrowDownIcon className="size-5" />
          </button>
        </div>

        <div className="min-h-screen space-y-2 p-4">
          <ThoughtList />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
