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
    console.log('Mood:', mood);
    event.preventDefault();
    const ingredients = form.map((ingredient) => ingredient.name);
    console.log('Ingredients:', ingredients);
    const response = await axios.post('https://certifiedmunch.com/api/generate-recipe-suggestions', { ingredients, mood });
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
    
          <label htmlFor="category" className="px-3">Category:</label>
          <select id="category" name="category" value={newIngredient.category} onChange={handleInputChange} className="py-2 px-3 border border-gray-400 rounded-lg">
            <option value="">Select</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button onClick={handleAddIngredient} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-3">Add Ingredient</button>
        </div>
    
        {form.length > 0 && (
          <div className="mt-10">
            {[...new Set(form.map(ingredient => ingredient.category))].map(category => (
              <div key={category}>
                <h3 className="text-xl font-medium">{category}</h3>
                <ol className="list-decimal pl-10">
                  {form
                    .filter(ingredient => ingredient.category === category)
                    .map((ingredient) => (
                      <li className="py-3 px-4 border-b border-gray-400" key={ingredient.id}>
                        {ingredient.name}
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-3" onClick={() => handleRemoveIngredient(ingredient.id)}>Remove</button>
                      </li>
                    ))}
                </ol>
              </div>
            ))}
          </div>
        )}
    
        <select name="mood" value={mood} onChange={(event) => setMood(event.target.value)}>
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
    
        <button onClick={handleSubmit} className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Generate Recipes
        </button>
      </div>
    );
};

export default Form;
