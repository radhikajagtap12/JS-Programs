function wordCount(str) {
  str = str.split(" ");
  let words = str.filter((elem) => elem != "");
  return words.length;
}

console.log(
  wordCount(
    "radhika shekhar samruddhi dhumal sss  qhswqh swbeh jwdbwhb jwdbwh  dbwb"
  )
);
