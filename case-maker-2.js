const { assertEqual } = require('./assertEqual');

// == main function ==
const makeCase = (input, style) => {
  const priority = [ ['camel', 'pascal', 'snake', 'kebab', 'title'] , ['vowel', 'consonant'],  ['upper', 'lower'] ];
  const cases = {
    camel: ([first, ...rest]) => first + rest.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(''),
    pascal: phrase => phrase.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(''),
    snake: phrase => phrase.join('_'),
    kebab: phrase => phrase.join('-'),
    title: phrase => phrase.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' '),
    vowel: phrase => phrase.map(word => word.replace(/[aeiou]/g, char => char.toUpperCase())).join(' '),
    consonant: phrase => phrase.map(word => word.replace(/[^aeiou]/g, char => char.toUpperCase())).join(' '),
    upper: phrase => phrase.join('_').toUpperCase(),
  };
  // Sanitize inputs
  const inputX = input.trim().toLowerCase().split(/[\s-_+]/);
  if (Array.isArray(style)) {
    for (const ele of style) {
      const styleX = priority
    }
  };
  return cases[style](inputX);
};

// == tests ==
assertEqual(makeCase("this-is-a string", "camel"), 'thisIsAString', 'camel');
assertEqual(makeCase("this is a string", "pascal"), 'ThisIsAString', 'pascal');
assertEqual(makeCase("tHis is a+string ", "snake"), 'this_is_a_string', 'snake');
assertEqual(makeCase("this is a stRing", "kebab"), 'this-is-a-string', 'kebab');
assertEqual(makeCase(" this is_a string", "title"), 'This Is A String', 'title');
assertEqual(makeCase("this iS a string", "vowel"), 'thIs Is A strIng', 'vowel');
assertEqual(makeCase("this is a string", "consonant"), 'THiS iS a STRiNG', 'consonant');
assertEqual(makeCase("thIs is a string", ["upper", "snake"]), 'THIS_IS_A_STRING', 'snake > upper');
assertEqual(makeCase("thIs is a string", ["pascal", "vowel"]), 'THIS_IS_A_STRING', 'pascal > vowel');