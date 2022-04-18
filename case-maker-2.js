const { assertEqual } = require('./assertEqual');

// == main function ==
const makeCase = (input, style) => {
  const priority = [ 'upper', 'lower', 'vowel', 'consonant', 'camel', 'pascal', 'snake', 'kebab', 'title' ];
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
  const styleX = Array.isArray(style) ? priority.find(a => style.includes(a)) : style;
  return cases[styleX](inputX);
};

// == tests ==
assertEqual(makeCase("this-is-a string", "camel"), 'thisIsAString', 'camel');
assertEqual(makeCase("this is a string", "pascal"), 'ThisIsAString', 'pascal');
assertEqual(makeCase("tHis is a+string ", "snake"), 'this_is_a_string', 'snake');
assertEqual(makeCase("this is a stRing", "kebab"), 'this-is-a-string', 'kebab');
assertEqual(makeCase(" this is_a string", "title"), 'This Is A String', 'title');
assertEqual(makeCase("this iS a string", "vowel"), 'thIs Is A strIng', 'vowel');
assertEqual(makeCase("this is a string", "consonant"), 'THiS iS a STRiNG', 'consonant');
assertEqual(makeCase("thIs is a string", ["upper", "snake"]), 'THIS_IS_A_STRING', 'upper');
assertEqual(makeCase("thIs is a string", ['snake', 'kebab', 'consonant', 'title', 'camel', 'pascal']), 'THiS iS a STRiNG', 'consonant');