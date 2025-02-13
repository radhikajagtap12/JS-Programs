function isAnagram(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  console.log(str1, str2);
  if (str1 === str2) return true;
  return false;
}
console.log(isAnagram("iam", "amii")); // true
