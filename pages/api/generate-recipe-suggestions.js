import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';
import cors from 'cors'; // Import the cors package

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
  basePath: 'https://certifiedmunch.com'
});
const openai = new OpenAIApi(configuration);

const corsMiddleware = cors({
  origin: '*', // set the origin to '*' to allow any domain to access your API
  credentials: true, // allow cookies to be passed along from the client
  methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'], // set the allowed HTTP methods
  allowedHeaders: ['Authorization', 'Content-Type'] // set the allowed headers in the request
});

export default async function handler(req, res) {
  // Call cors as middleware
  corsMiddleware(req, res, async () => {
    // Your API code goes here
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      });
      return;
    }

    const generateRecipes = async (ingredients, mood) => {
      let prompt;

      switch (mood) {
        case "spicy_and_hearty":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 spicy and hearty recipes based on the ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
        case "sweet_and_savory":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 sweet and savory recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
          case "healthy_and_light":
            prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 healthy and light recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
            break;
          case "quick_and_easy":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 quick and easy recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
          case "comfort_food":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 comfort food recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
          case "fancy":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 fancy recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
          case "kid_friendly":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 kid friendly recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
          case "vegetarian":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 vegetarian recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
        break;
        case "vegan":
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 vegan recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
        default:
          prompt = `Here is a list of ingredients: ${ingredients}. Suggest 5 recipes using these ingredients. Structure the response Recipe: \n Ingredients: \n Instructions:`;
          break;
      }

      const response = await openai.complete({
        engine: "davinci",
        prompt: prompt,
        maxTokens: 100,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 5,
        stream: false,
        stop: ["\n"]
      });

      return response.data.choices.map((choice) => {
        const [recipe, ingredients, instructions] = choice.text.split("\n");
        return {
          recipe,
          ingredients,
          instructions
        };
      });
    };

    const { ingredients, mood } = req.body;
    if (!ingredients) {
      res.status(400).json({
        error: {
          message: "Missing ingredients parameter"
        }
      });
      return;
    }

    const recipes = await generateRecipes(ingredients, mood);

    res.status(200).json({
      recipes
    });
  });
}
