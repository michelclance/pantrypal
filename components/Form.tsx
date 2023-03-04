import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { FormContext,  Ingredient } from '../components/contextobject';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

const Form: React.FC = () => {
  const [mood, setMood] = useState('');
  const { form, addIngredient, removeIngredient } = useContext(FormContext);
  const [newIngredient, setNewIngredient] = useState<Partial<Ingredient>>({
    name: '',
    category: ''
  });
  const categories = ['Baking Ingredients', 'Fruit', 'Vegetable', 'Meat', 'MeatSub', 'Dairy', 'Poultry', 'Fish', 'Grain', 'Spice', 'Condiment', 'Beverage', 'Other'];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewIngredient({
      ...newIngredient,
      [event.target.name]: event.target.value
    });
  };
  const handleAddIngredient = () => {
    addIngredient({
      id: Date.now().toString(),
      name: newIngredient.name as string,
      category: newIngredient.category as string
    });
    setNewIngredient({ name: '', category: '' });
  };
  const handleRemoveIngredient = (id: string) => {
    console.log('id:', id);
    removeIngredient(id);
  };

  const router = useRouter();
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const ingredients = form.map((ingredient) => ingredient.name);
    const response = await axios.post('/api/generate-recipe-suggestions', { ingredients, mood });
    router.push({
      pathname: '/',
      query: { recipeSuggestions: response.data },
    });
  };

  return (
    <div className="px-10">
      <Link href="/">
        <HomeIcon className="h-8 w-8 mr-1 flex items-center text-gray-800" />
      </Link>
  
      <h2 className="text-2xl text-center font-medium">Your Pantry</h2>

      <div className="flex mt-6 items-center">
        <input
          type="text"
          name="name"
          value={newIngredient.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full py-2 px-3 border border-gray-400 rounded-lg"
        />

        <select 
          name="category" 
          value={newIngredient.category} 
          onChange={handleInputChange} 
          className="py-2 px-3 border border-gray-400 rounded-lg ml-3"
        >
          <option value="">Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        <button 
          onClick={handleAddIngredient} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-3"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-end mt-10 mb-6">
    <select 
      name="mood" 
      value={mood} 
      onChange={(event) => setMood(event.target.value)} 
      className="px-4 py-2 border border-gray-300 mb-4 focus:outline-none focus:ring focus:border-blue-300"
    >
      <option value="">Select a mood</option>
      <option value="spicy_and_hearty">Spicy and Hearty</option>
      <option value="sweet_and_savory">Sweet and Savory</option>
      <option value="healthy_and_light">Healthy and Light</option>
      <option value="quick_and_easy">Quick and Easy</option>
      <option value="comfort_food">Comfort Food</option>
      <option value="fancy">Fancy</option>
      <option value="kid_friendly">Kid Friendly</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="vegan">Vegan</option>
    </select>
    <button 
      onClick={handleSubmit} 
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Generate Recipes
    </button>
  </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {[...new Set(form.map(ingredient => ingredient.category).sort())].map(category => (
    <div key={category} className="bg-white p-4 rounded-lg shadow-md mt-10">
      <h3 className="text-lg font-bold mb-2">{category}:</h3>
      <ol className="pl-10">
        {form
          .filter(ingredient => ingredient.category === category)
          .map((ingredient) => (
            <li className="flex justify-between py-3 px-4 border-b border-gray-400" key={ingredient.id}>
              <span className="text-gray-600 mb-2 text-bold">{ingredient.name}</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={() => handleRemoveIngredient(ingredient.id)}>Remove</button>
            </li>
          ))}
      </ol>
    </div>
  ))}
</div>
</div>

    );
};

export default Form;


