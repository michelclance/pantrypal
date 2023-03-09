import React, { useContext } from "react";
import { RecipeContext } from "../components/RecipeProvider";

const RecipeSave: React.FC = () => {
  const { savedRecipes, removeRecipe } = useContext(RecipeContext);

  const handleRemoveRecipe = (recipe: string) => {
    removeRecipe(recipe);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {savedRecipes && savedRecipes.map((recipe, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Saved Recipe</h2>
          {recipe.split("\n").map((line, i) => (
            <p key={i} className="text-gray-600 mb-2 text-bold">
              {line}
            </p>
          ))}
          <button onClick={() => handleRemoveRecipe(recipe)}>Remove Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeSave;
