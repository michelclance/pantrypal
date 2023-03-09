import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../components/RecipeProvider";

interface RecipeSuggestionsProps {
  recipeSuggestions?: string | string[]; // Make the prop optional
  mood?: string;
}

const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ recipeSuggestions, mood }) => {
  const { savedRecipes, saveRecipe } = useContext(RecipeContext);

  const [localRecipeSuggestions, setLocalRecipeSuggestions] = useState<string[]>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedRecipeSuggestions = JSON.parse(localStorage.getItem("recipeSuggestions") || "[]");
      return storedRecipeSuggestions;
    }
    return [];
  });

  useEffect(() => {
    if (recipeSuggestions) {
      if (Array.isArray(recipeSuggestions)) {
        setLocalRecipeSuggestions(recipeSuggestions);
      } else {
        setLocalRecipeSuggestions([recipeSuggestions]);
      }
    }
  }, [recipeSuggestions]);

  useEffect(() => {
    if (localRecipeSuggestions.length > 0) {
      localStorage.setItem("recipeSuggestions", JSON.stringify(localRecipeSuggestions));
    }
  }, [localRecipeSuggestions]);

  let paragraphs: string[] = [];

  if (localRecipeSuggestions.length > 0) {
    paragraphs = localRecipeSuggestions.flatMap((s) => s.split("\n\n"));
  } else if (Array.isArray(recipeSuggestions)) {
    paragraphs = recipeSuggestions.flatMap((s) => s.split("\n\n"));
  } else {
    paragraphs = recipeSuggestions?.split("\n\n") || [];
  }

  const handleSaveRecipe = (recipe: string) => {
    saveRecipe(recipe);
  };

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
          <button onClick={() => handleSaveRecipe(paragraph)}>Save Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;
