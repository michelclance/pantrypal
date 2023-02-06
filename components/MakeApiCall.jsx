const router = useRouter();
  async function MakeApiCall() {
    
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
    let allIngredients = [...bakingIngredients, ...fruits, ...vegetables, ...dairys, ...meatSub, ...meats, ...poultrys, ...fishs, ...shellfishs, ...herbs, ...grains, ...beans, ...noodles, ...oils, ...breads];

    // Check if any of the ingredient lists are empty
    allIngredients = allIngredients.filter(ingredient => ingredient.length !== 0);

    // Limit the number of ingredients to a certain number
    const maxIngredients = 40;
    allIngredients = allIngredients.slice(0, maxIngredients);

    let ingredients = allIngredients.map(ingredient => ingredient.name).join(' ');
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
          max_tokens: 2048
        })
      });

      // Check if the API returned an error
      // Check the status code of the API response
      if (response.ok) {
        const json = await response.json();
        const recipeText = json.choices[0].text;
        setRecipeText(recipeText);
        router.push({ pathname: '/NavBar', query: { recipeText } });
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


  <div className='mt-6'>
          <button
          onClick={MakeApiCall}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Generate Recipes
          </button>
  </div>