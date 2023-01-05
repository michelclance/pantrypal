import React, { useState } from 'react';
import LandingPage from '../components/NavBar'

const Pantry = () => {
  const [bakingIngredients, setBakingIngredients] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [dairys, setDairy] = useState([]);
  const [meatShites, setMeatShite] = useState([]);
  const [meats, setMeats] = useState([]);
  const [poultrys, setPoultry] = useState([]);
  const [fishs, setFish] = useState([]);
  const [shellfishs, setShellfish] = useState([]);
  const [herbs, setHerb] = useState([]);
  const [grains, setGrains] = useState([]);
  const [beans, setBeans] = useState([]);
  const [noodles, setNoodles] = useState([]);
  const [oils, setOils] = useState([]);
  const [breads, setBread] = useState([]);



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
  <h2 className="mb-4">Dairy:</h2>
  <div className="border overflow-y-scroll h-32">
    {dairys.map(dairy => (
      <div key={dairy.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{dairy.name}</p>
        <button className='flex-shrink-0' onClick={() => setDairy(dairys.filter(d => d.id !== dairy.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setDairy([...dairys, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add dairy" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Non-meat meatshite:</h2>
  <div className="border overflow-y-scroll h-32">
    {meatShites.map(meatshite => (
      <div key={meatshite.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{meatshite.name}</p>
        <button className='flex-shrink-0' onClick={() => setMeatShite(meatShites.filter(m => m.id !== meatshite.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setMeatShite([...meatShites, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add fake meat" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Meat:</h2>
  <div className="border overflow-y-scroll h-32">
    {meats.map(meat => (
      <div key={meat.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{meat.name}</p>
        <button className='flex-shrink-0' onClick={() => setMeats(meats.filter(m => m.id !== meat.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setMeats([...meats, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add meat" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Poultry:</h2>
  <div className="border overflow-y-scroll h-32">
    {poultrys.map(poultry => (
      <div key={poultry.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{poultry.name}</p>
        <button className='flex-shrink-0' onClick={() => setPoultry(bakingIngredients.filter(p => p.id !== poultry.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setPoultry([...poultrys, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add poultry" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Fish:</h2>
  <div className="border overflow-y-scroll h-32">
    {fishs.map(fish => (
      <div key={fish.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{fish.name}</p>
        <button className='flex-shrink-0' onClick={() => setFish(fishs.filter(f => f.id !== fish.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setFish([...fishs, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add fish" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
   <h2 className="mb-4">Shellfish:</h2>
  <div className="border overflow-y-scroll h-32">
    {shellfishs.map(shellfish => (
      <div key={shellfish.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{shellfish.name}</p>
        <button className='flex-shrink-0' onClick={() => setShellfish(shellfishs.filter(s => s.id !== shellfish.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setShellfish([...shellfishs, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add shellfish" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Herb & Spice:</h2>
  <div className="border overflow-y-scroll h-32">
    {herbs.map(herb => (
      <div key={herb.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{herb.name}</p>
        <button className='flex-shrink-0' onClick={() => setHerb(herbs.filter(h => h.id !== herb.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setHerb([...herbs, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add herb & spice" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Grains:</h2>
  <div className="border overflow-y-scroll h-32">
    {grains.map(grain => (
      <div key={grain.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{grain.name}</p>
        <button className='flex-shrink-0' onClick={() => setGrains(grains.filter(g => g.id !== grain.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setGrains([...grains, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add Grains" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Beans:</h2>
  <div className="border overflow-y-scroll h-32">
    {beans.map(bean => (
      <div key={bean.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{bean.name}</p>
        <button className='flex-shrink-0' onClick={() => setBeans(beans.filter(b => b.id !== bean.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBeans([...beans, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add beans" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Noodle:</h2>
  <div className="border overflow-y-scroll h-32">
    {noodles.map(noodle => (
      <div key={noodle.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{noodle.name}</p>
        <button className='flex-shrink-0' onClick={() => setNoodles(noodles.filter(n => n.id !== noodle.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setNoodles([...noodles, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add noodle" className="border" />
    <button type="submit">Add</button>
  </form>
</div>

<div className="w-1/3 p-4">
  <h2 className="mb-4">Oils:</h2>
  <div className="border overflow-y-scroll h-32">
    {oils.map(oil => (
      <div key={oil.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{oil.name}</p>
        <button className='flex-shrink-0' onClick={() => setOils(oils.filter(o => o.id !== oil.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setOils([...oils, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add oil" className="border" />
    <button type="submit">Add</button>
  </form>
</div>


<div className="w-1/3 p-4">
  <h2 className="mb-4">Bread:</h2>
  <div className="border overflow-y-scroll h-32">
    {breads.map(bread => (
      <div key={bread.id} className="mb-4 flex justify-between">
        <p className="flex-grow-10">{bread.name}</p>
        <button className='flex-shrink-0' onClick={() => setBread(breads.filter(l => l.id !== bread.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
  <form onSubmit={e => {e.preventDefault(); setBread([...breads, { id: Date.now(), name: e.target.elements.name.value }]); e.target.reset(); }}>
    <input type="text" name="name" placeholder="Add bread" className="border" />
    <button type="submit">Add</button>
  </form>
</div>


</div>
</div>
  )}
  export default Pantry