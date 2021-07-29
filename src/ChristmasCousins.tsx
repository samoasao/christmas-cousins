import data from "./data";
const ChristmasCousins = () => {
  const getResults = () => {
    const cousins = data.cousins;
    const families = data.families;
    let hat = [...cousins, ...cousins];
    const results: any = [];

    families.forEach((family) => {
      const siblings = cousins.filter((cousin) => cousin.family === family.id);
      let familyResults: any = [];

      siblings.forEach((sibling) => {
        let randomNum = Math.floor(Math.random() * hat.length);
        let firstPick = hat[randomNum];

        while (familyResults.includes(firstPick) || firstPick.family == sibling.family) {
          randomNum = Math.floor(Math.random() * hat.length);
          firstPick = hat[randomNum];
        }

        familyResults.push(firstPick);
        hat.splice(randomNum, 1);

        randomNum = Math.floor(Math.random() * hat.length);
        let secondPick = hat[randomNum];

        while (familyResults.includes(secondPick) || secondPick.family == sibling.family) {
          randomNum = Math.floor(Math.random() * hat.length);
          secondPick = hat[randomNum];
        }

        familyResults.push(secondPick);
        hat.splice(randomNum, 1);

        results.push({
          cousin: sibling.name,
          firstPick: firstPick.name,
          secondPick: secondPick.name,
        });

      });
    });

    console.log(results);
  };

  getResults();

  return <h1>Yo</h1>;
};

export default ChristmasCousins;
