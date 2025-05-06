useEffect(() => {
  const interval = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(interval); // Nettoyage au démontage
  };
}, []);