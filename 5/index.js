const string = "Arara";

const inverterString = (string) => {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  console.log(stringInvertida);
};

inverterString(string);
