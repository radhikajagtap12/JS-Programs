// function starPyr(num) {
//   let strCount = "";
//   for (let i = 0; i <= num; i++) {
//     // console.log(i);
//     // strCount = strCount + "*";
//     // console.log(strCount);
//     for (let j = 1; j <= i; j++) {
//       strCount = strCount + j;
//     }
//   }
//   console.log(strCount +);
// }

function starPyr1(num) {
  let i, j, k;
  for (let i = 1; i <= num; i++) {
    let starCount = "";

    for (let j = 1; j <= i; j++) {
      starCount = starCount + "*";
    }
    console.log(starCount);
  }
}

function starPyr2(num) {
  let i, j, k, l;
  for (let i = 1; i <= num; i++) {
    let starCount = "";
    // console.log("i " + i);
    for (let k = 1; k <= num - i; k++) {
      starCount = starCount + " ";
    }
    for (let j = 1; j <= i; j++) {
      starCount = starCount + "*";
    }
    for (l = 2; l <= i; l++) {
      starCount = starCount + "*";
    }
    console.log(starCount);
  }
}

function starPyr3(num) {
  let m = 1;
  for (let i = 1; i <= num; i++) {
    let starCount = "";
    // console.log("i " + i);
    for (let k = 1; k <= num - i; k++) {
      starCount = starCount + " ";
    }
    for (let j = 1; j <= m; j++) {
      starCount = starCount + "*";
    }
    console.log(starCount);
    m = m + 2;
  }
}

function starPyr4(num) {
  for (let i = num; i >= 0; i--) {
    let space = "";
    for (let k = 0; k <= num - i; k++) {
      space = space + " ";
    }
    for (let j = 0; j <= i; j++) {
      space = space + "*";
    }
    for (let l = 0; l <= i - 1; l++) {
      space = space + "*";
    }

    console.log(space);
  }
}

function starPyr5(num) {
  for (let i = 0; i <= num; i++) {
    let space = "";
    for (let n = 0; n <= num - i; n++) {
      space = space + " ";
    }
    for (let m = 0; m <= i; m++) {
      space = space + "*";
    }
    for (let o = 1; o <= i; o++) {
      space = space + "*";
    }
    console.log(space);
  }
  for (let i = 1; i <= num; i++) {
    let space = "";
    for (let j = 0; j <= i; j++) {
      space = space + " ";
    }
    for (let k = 0; k <= num - i; k++) {
      space = space + "*";
    }
    for (let l = 1; l <= num - i; l++) {
      space = space + "*";
    }
    console.log(space);
  }
}

// starPyr1(5);
// console.log("///////////////////////////////////////////////");
// starPyr2(5);
// console.log("///////////////////////////////////////////////");
// starPyr3(5);
// console.log("///////////////////////////////////////////////");
// starPyr4(5);
// console.log("///////////////////////////////////////////////");
starPyr5(5);
