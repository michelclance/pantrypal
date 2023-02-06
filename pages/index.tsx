import React, { useState } from 'react';
import Pantry from './Pantry';
import NavBar from './NavBar';
import { Provider } from "react-redux";
import store from "../components/store";


type HomeProps = {
  setRecipeText: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Home: React.FC<HomeProps> = ({ setRecipeText }) => {
  const [showPantry, setShowPantry] = useState(false);
  const [recipeText, setRecipeTextState] = useState<string | undefined>(undefined);

  return (
    <Provider store={store}>
    <div>
      {showPantry && <Pantry setRecipeText={setRecipeText} />}
      <NavBar recipeText={recipeText} setShowPantry={setShowPantry} />
    </div>
    </Provider>
  );
};

export default Home;
