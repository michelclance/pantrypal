import React, { useState } from 'react';
import { HomeIcon, PlusIcon } from '@heroicons/react/20/solid'
import { RootState, ingredientActions, Action } from '../components/store';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";


interface PantryProps {
  setRecipeText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Pantry: React.FC<PantryProps> = ({ setRecipeText }) => {


  const ingredients = useSelector((state: RootState) => state.ingredients);
;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, category: keyof RootState["ingredients"]) => {
    event.preventDefault();
    const form = event.currentTarget;
    const ingredient = form.elements.namedItem("ingredient") as HTMLInputElement;
    const action: Action = {
      type: "ADD_INGREDIENT",
      category,
      payload: {
        name: ingredient.value,
        id: uuidv4()
      }
    };
    dispatch(action);
    setInputValue("");
  };
  const handleRemove = (category: keyof RootState["ingredients"], ingredientId: string) => {
    const action: Action = {
      type: "REMOVE_INGREDIENT",
      category,
      payload: ingredientId
    };
    dispatch(action);
  };
  


  return (

    <div className="container mx-auto">
  <a href="/">
    <div className="absolute top-0 left-0">
      <HomeIcon className="mx-auto h-12 w-12 text-indigo-600" aria-hidden="true" />
    </div>
  </a>
  <h1 className="text-center mt-4 font-bold">Your lil Pantry</h1>
  <div className="flex flex-wrap justify-between mt-8">

  <div className="w-1/3 p-4">
  <h2 className="mb-4 text-lg font-medium text-gray-800">Baking Ingredients:</h2>
  <div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
  <form onSubmit={event => handleSubmit(event, "baking")}>
  <input type="text" name="ingredient" value={inputValue} onChange={e => setInputValue(e.target.value)} />
  <button type="submit">Add Ingredient</button>
</form>
    {ingredients.baking.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("baking", id)}>Remove</button>
        </div>
      ))}
  </div>
</div>

    
<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Fruits:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "fruits")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Fruit</button>
      </form>
      {ingredients.fruits.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("fruits", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Vegetables:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "vegetables")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Fruit</button>
      </form>
      {ingredients.vegetables.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("vegetables", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>


<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Dairy:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "dairies")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Fruit</button>
      </form>
      {ingredients.dairies.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("dairies", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Non-meat / Meat Substitute:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "meatSub")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meatsubs</button>
      </form>
      {ingredients.meatSub.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("meatSub", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Meat:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "meats")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.meats.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("meats", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Poultry</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "poultry")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.poultry.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("poultry", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Fish:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "fish")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add fish</button>
      </form>
      {ingredients.fish.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("fish", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>


<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Shellfish:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "shellfish")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.shellfish.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("shellfish", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Herb & Spice:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "herbs")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.herbs.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("herbs", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Grains</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "grains")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.grains.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("grains", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Beans:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "beans")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.beans.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("beans", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Noodle:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "noodles")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.noodles.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("noodles", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Oils:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "oils")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.oils.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("oils", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>

<div className="w-1/3 p-4">
<h2 className="mb-4 text-lg font-medium text-gray-800">Bread:</h2>
<div className="bg-gray-100 rounded-md overflow-y-scroll h-32 p-4">
<form onSubmit={event => handleSubmit(event, "poultry")}>
        <input type="text" name="ingredient" />
        <button type="submit">Add Meat</button>
      </form>
      {ingredients.breads.map(({ name, id }) => (
        <div key={id}>
          {name}
          <button onClick={() => handleRemove("breads", id)}>Remove</button>
        </div>
      ))}
      {/* repeat the form and ingredient list for each category */}
</div>
</div>
          </div>
          
</div>
  )}
  export default Pantry

