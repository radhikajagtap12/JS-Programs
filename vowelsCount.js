function vowelsCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let consonentsCount = 0;
  str = str.split(" ").join("");

  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelsCount++;
    } else {
      consonentsCount++;
    }
  }
  return "Vowels: " + vowelsCount + " Consonents: " + consonentsCount;
}

console.log(vowelsCount("hello radhika")); // Vowels: 2 Consonents: 3
