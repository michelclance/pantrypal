import { useFormContext } from '../components/contextobject';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { form } = useFormContext();
const router = useRouter();
const [recipeText, setRecipeText] = useState('');


 async function MakeApiCall() {
  const apiKey = "YOUR_API_KEY_HERE";
  const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  // Get the names of all ingredients stored in the context
  let ingredients = form.map(ingredient => ingredient.name).join(' ');

  // Check if there are no ingredients
  if (ingredients.length === 0) {
    console.log("No ingredients found");
    return;
  }

  // Limit the number of ingredients to a certain number
  const maxIngredients = 40;
  ingredients = ingredients.slice(0, maxIngredients);

  const prompt = `Ingredients: ${ingredients}. Suggest 20 recipes and provide instructions`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 2048,
        temperature: 0.5
      })
    });

    // Check if the API returned an error
    // Check the status code of the API response
    if (response.ok) {
      const json = await response.json();
      const recipeText = json.choices[0].text;
      setRecipeText(recipeText);
      router.push({ pathname: '/NavBar'});
    } else {
      // Handle different types of API errors
      if (response.status === 401) {
        console.log("Invalid API key");
      } else if (response.status === 400) {
        console.log("Bad request");
      } else {
        console.log("An error occurred");
      }
    }
  } catch (error) {
    // Handle network errors
    console.log("An error occurred while making the API call", error);
  }
}
