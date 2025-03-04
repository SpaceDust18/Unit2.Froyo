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

//*Splits input into an array of strings*/
/*Initializes an empty obj to store the count of froyo flavors*/
/* Loop iterates over each element in the stringArray(list of flavors). Each element is assigned  to the variable flavor in each iteration*/
/*Removes spaces around each element from the flavor string*/
/*Checks if trimmedFlavor exist as a key in the flavorCounts object, if the flavor is found and seen before, the count is incremented by 1. If not, it is added to the flavorCounts object with an initial count of 1*/