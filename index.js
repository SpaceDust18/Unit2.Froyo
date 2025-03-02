const inputFroyo = prompt(
        "Enter a list of comma-separated froyo flavors.", "Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee");
   
        if (inputFroyo) {
            const stringArray = inputFroyo.split(",");
            const flavorCounts = {}; 
        
            for (const flavor of stringArray) {
              const trimmedFlavor = flavor.trim(); 
              if (flavorCounts[trimmedFlavor]) {
                flavorCounts[trimmedFlavor]++; 
              } else {
                flavorCounts[trimmedFlavor] = 1;
              }
            }
            console.table(flavorCounts);
        } 

