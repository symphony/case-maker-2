const makeCase = (input, style) => {
  const priority = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  const cases = {
    camel: (string) => {

    },
    pascal: (string) => {

    },
    snake: (string) => {

    },
    kebab: (string) => {

    },
    title: (string) => {

    },
    vowel: (string) => {

    },
    consonant: (string) => {

    },
    upper: (string) => {

    },
    lower: (string) => {

    },
  };
  const styleX = Array.isArray(style) ? priority.find(a => style.includes(a)) : style;
  return cases[styleX](input);
};

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING