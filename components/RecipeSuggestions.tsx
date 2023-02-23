import React from "react";

interface RecipeSuggestionsProps {
  recipeSuggestions: string | string[];
  mood?: string;
}

const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ recipeSuggestions, mood }) => {
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
          <h2 className="text-lg font-semibold mb-2">{mood ? `${mood} recipe` : "Recipe"}</h2>
          {paragraph.split("\n").map((line, i) => (
            <p key={i} className="text-gray-600 mb-2">
              {line}
            </p>
          ))}
          <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors">
            Save Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;
