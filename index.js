const inputFroyo = prompt(
        "Enter a list of comma-separated froyo flavors.", "Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee");
   
        if (inputFroyo) {
            const stringArray = inputFroyo.split(",");/*Splits input into an array of strings*/
            const flavorCounts = {}; /*Initializes an empty obj to store the count of froyo flavors*/
        
            for (const flavor of stringArray) /* Loop iterates over each element in the stringArray(list of flavors). Each element is assigned  to the variable flavor in each iteration*/ {
              const trimmedFlavor = flavor.trim(); /*Removes spaces around each element from the flavor string*/
              if (flavorCounts[trimmedFlavor]) {
                flavorCounts[trimmedFlavor]++; 
              } else {
                flavorCounts[trimmedFlavor] = 1;
              } /*Checks if trimmedFlavor exist as a key in the flavorCounts object, if the flavor is found and seen before, the count is incremented by 1. If not, it is added to the flavorcounts object with an initial count of 1*/
            }
            console.table(flavorCounts); /*Logs flavorCounts object in table format.*/
        } 

