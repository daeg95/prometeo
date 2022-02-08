// Import the data
import * as input from "./data/input.js";

//This is the data obtain after HTTP request import the input.js file
let arrayData = await input.getData();

//This function returns the pair of players that add up their height in
//inches the result is the input number. The input of this function is the
//data received from the http request and the input number
async function players(Data, inchInput) {
  let newMap = {};
  let newMap1 = {};

  //The idea is newset will return without repeating,
  // the h_in values inside Data. This is to reduce the search from 335 items which
  // are the heights of all players to 20 items. Besides, it will return the name of
  // all the players whose height is equal to the key value (In this case they will
  //   be the values that are added together to give the value of the input number).

  const newset = new Set(
    Data.map((player) => {
      const fullName = `${player["first_name"]} ${player["last_name"]}`;
      const key = player["h_in"];

      newMap[key]
        ? (newMap[key] = [...newMap[key], fullName])
        : (newMap[key] = [fullName]);

      newMap1[key]
        ? (newMap1[key] = [...newMap1[key], fullName])
        : (newMap1[key] = [fullName]);

      return parseFloat(key);
    })
  );

  // The algorithm idea is to find the pairs using a hash table. First, hashTable is
  // initialized empty, and then it sees if there is a value within hashTable that is
  // equal to the difference (difference = inchInput - inch[i]). If that value does not
  // exist within hashTable adds it, if it exists it returns true and prints the values
  // of inches and the names.

  let hashTable = new Set();
  let final_response = null

  newset.forEach((inch) => {
    let difference = inchInput - inch;
    
    

    // Look at the condition if the difference is inside hashTable

    if (hashTable.has(difference)) {
      
      // If there is a match, the h_in values are extracted that are added together and meet
      // the condition. Later, the names of the players that meet the height with these values.
      // Finally, pairs are formed between these.

      console.log(
        "The height pair that added together give " + inchInput +" is (" + inch +", " + difference + ")"
      );
      console.log("The combination of players that meet these heights are:");

      newMap[inch].forEach((name1) => {
        newMap1[difference].forEach((name2) => {

          
           console.log(name1, name2);
           final_response = [name1, name2]
        
        
        });
      });
    }
    hashTable.add(inch);

 
  });

  



}

//Finally we call the function taking into account that it needs the http request 
//data and the value to be evaluated and we print the result


console.log(players(arrayData, 139));
