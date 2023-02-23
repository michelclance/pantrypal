import React from "react";

interface RecipeSuggestionsProps {
  recipeSuggestions: string | string[];
  mood?: string;
}

const RecipeSuggestions = ({ recipeSuggestions, mood }: RecipeSuggestionsProps) => {
  const paragraphs = React.useMemo(() => {
    let result: string[] = [];

    if (Array.isArray(recipeSuggestions)) {
      result = recipeSuggestions.flatMap(s => s.split("\n\n"));
    } else {
      result = recipeSuggestions.split("\n\n");
    }

    return result;
  }, [recipeSuggestions]);

  return (
    <div className="divide-y divide-gray-200">
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="my-4">
          <p className="mb-2">{paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;
