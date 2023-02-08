let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

const generateWords = () => {
  let result = "";
  for (let i = 1; i <= words.length; i++) {
    let subStr = "";
    for (let j = 0; j < i; j++) {
      subStr += words[j];
    }
    result += subStr + "\n";
  }
  console.log(result);
};

generateWords();
