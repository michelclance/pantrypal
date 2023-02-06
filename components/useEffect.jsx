useEffect(() => {
    const data = window.localStorage.getItem('bakingingredients');
    if (data !== null) { 
      setBakingIngredients(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    const data = window.localStorage.getItem('fruits');
    if (data !== null) { 
      setFruits(JSON.parse(data));
    }
  }, []);

useEffect(() => {
    const data = window.localStorage.getItem('vegetables');
    if (data !== null) { 
      setVegetables(JSON.parse(data));
    }
  }, []);

useEffect(() => {
    const data = window.localStorage.getItem('dairys');
    if (data !== null) { 
      setDairy(JSON.parse(data));
    }
  }, []);

useEffect(() => {
    const data = window.localStorage.getItem('meatSub');
    if (data !== null) { 
      setMeatSub(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('meats');
    if (data !== null) { 
      setMeats(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('poultrys');
    if (data !== null) { 
      setPoultry(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('fishs');
    if (data !== null) { 
      setFish(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('shellfishs');
    if (data !== null) { 
      setShellfish(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('herbs');
    if (data !== null) { 
      setHerb(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('grains');
    if (data !== null) { 
      setGrains(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('beans');
    if (data !== null) { 
      setBeans(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('noodles');
    if (data !== null) { 
      setNoodles(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('oils');
    if (data !== null) { 
      setOils(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('breads');
    if (data !== null) { 
      setBread(JSON.parse(data));
    }
  }, []);