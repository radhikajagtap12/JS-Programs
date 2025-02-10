function starPyr(num) {
  let i, j, k, l, m;
  for (i = 0; i < num; i++) {
    let space = "";
    for (j = 0; j < num - i; j++) {
      space = space + "*";
    }
    for (j = 0; j < i; j++) {
      space = space + " ";
    }
    for (j = 1; j < i; j++) {
      space = space + " ";
    }

    if (num - i === num) {
      m = num - i - 1;
    } else {
      m = num - i;
    }
    for (j = 0; j < m; j++) {
      space = space + "*";
    }

    console.log(space);
  }
  for (i = 1; i < num; i++) {
    let space = "";
    for (j = 0; j <= i; j++) {
      space = space + "*";
    }
    for (j = 2; j <= num - i; j++) {
      space = space + " ";
    }
    // for (j = 2; j <= num - i - 1; j++) {
    //   space = space + "0";
    // }
    for (j = 2; j <= num - i - 1; j++) {
      space = space + " ";
    }
    if (i === num - 1) {
      m = i - 1;
    } else {
      m = i;
    }
    for (j = 0; j <= m; j++) {
      space = space + "*";
    }
    console.log(space);
  }
}

starPyr(15);
