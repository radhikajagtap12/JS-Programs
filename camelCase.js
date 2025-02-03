let str = "radhika dhumal shekhar samu me too";
str = str.split(" ");
for (var i = 1; i < str.length; i++) {
	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str.join(""));
