let str = "radhika dhumal";
function reverseString(myStr) {
  let myArr = [];
  myStr = myStr.split(" ");
  myStr.map((word) => {
    let revWord = word.split("").reverse().join("");
    myArr.push(revWord);
  });
  console.log(myArr.join(" "));

  //   for (let i = 0; i < myStr.length; i++) {
  //     let word = myStr[i];
  //     let revWord = "";
  //     for (let j = word.length - 1; j >= 0; j--) {
  //       revWord += word[j];
  //     }
  //     myArr.push(revWord);
  //   }
  //   console.log(myArr.join(" "));
}
reverseString(str);
