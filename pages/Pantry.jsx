import React, { useState } from 'react';
import LandingPage from '../components/NavBar'

const Pantry = () => {
  const [bakingIngredients, setBakingIngredients] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  return (
    <div className="container mx-auto">
        <LandingPage />
      <h1 className="text-center mt-4 font-bold">Pantry Management</h1>
      <div className="flex flex-wrap justify-between mt-8">
      
  <div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Fruits:</h2>
  <div className="border overflow-y-scroll h-32">
    {fruits.map(fruit => (
      <div key={fruit.id} className="mb-4 flex justify-between">
        <p className="flex-grow-1">{fruit.name}</p>
        <button className='flex-shrink-0' onClick={() => setFruits(fruits.filter(f => f.id !== fruit.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setFruits([...fruits, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add fruit" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Vegetables:</h2>
  <div className="border overflow-y-scroll h-32">
    {vegetables.map(vegetable => (
      <div key={vegetable.id} className="mb-4 flex justify-between">
        <p className="flex-grow-1">{vegetable.name}</p>
        <button className='flex-shrink-0' onClick={() => setVegetables(vegetables.filter(v => v.id !== vegetable.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setVegetables([...vegetables, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add vegetable" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>
<div className="w-1/3 p-4">
  <h2 className="mb-4">Baking Ingredients:</h2>
  <div className="border overflow-y-scroll h-32">
    {bakingIngredients.map(ingredient => (
      <div key={ingredient.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{ingredient.name}</p>
        <button className='flex-shrink-0' onClick={() => setBakingIngredients(bakingIngredients.filter(i => i.id !== ingredient.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBakingIngredients([...bakingIngredients, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add ingredient" className="border" />
    <button type="submit">Add</button>
  </form>
</div>


</div>
</div>
  )}
  export default Pantry