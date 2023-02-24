import React from "react";

interface RecipeSuggestionsProps {
  recipeSuggestions?: string | string[]; // Make the prop optional
  mood?: string;
}

const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ recipeSuggestions, mood }) => {
  // If recipeSuggestions is not available, return null
  if (!recipeSuggestions) {
    return null;
  }

  let paragraphs: string[] = [];

  if (Array.isArray(recipeSuggestions)) {
    paragraphs = recipeSuggestions.flatMap((s) => s.split("\n\n"));
  } else {
    paragraphs = recipeSuggestions.split("\n\n");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">{mood ? `${mood} Recipe` : ""}</h2>
          {paragraph.split("\n").map((line, i) => (
            <p key={i} className="text-gray-600 mb-2 text-bold">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;

