// Make API Requests to the following endpoint: https://emagi-server-8-3.herokuapp.com/api/emojis
const BASE_URL = 'https://emagi-server-8-3.herokuapp.com/api/emojis';
let emojiDictionary = {};

fetch(BASE_URL)
  .then((res) => res.json())
  .then(renderResponse)
  .catch(renderError);

function renderResponse(json) {
  // call a function that creates a dictionary and stores it as a global var
  emojiDictionary = generateEmojiDictionary(json);
  console.log(textToEmoji('The silly goat climbed the mountain.'));
}

function renderError(e) {
  console.log(e);
}

function generateEmojiDictionary(emojiArr) {
  let dictionary = {};

  // loop through every obj in emojiArr
  for (obj of emojiArr) {
    // if there is a letter property
    if (obj.letter) {
      // add the letter as a key
      // add the emoji as the value
      dictionary[obj.letter] = obj.symbol;
    }

    // add the name as the key
    // add the emoji as the value
    dictionary[obj.name] = obj.symbol;
  }

  return dictionary;
}

function textToEmoji(str) {
  let emoji = '';
  // str to lowercase
  str = str.toLowerCase();
  // convert the string into an array of letters
  const strArr = str.split('');

  // mvp is to translate letter by letter
  // loop through each letter in the array
  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];
    // if letter is found in dictionary
    if (emojiDictionary[char]) {
      // add dictionary value to emoji
      emoji += emojiDictionary[char];
    } else {
      // if not found, add current letter to emoji str
      emoji += char;
    }
  }

  // version 2 is to translate word by word, remove matching words, then translate letter by letter, keeping order

  console.log(emoji);
  return emoji;
}
