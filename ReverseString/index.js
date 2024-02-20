// Create a function that reverses a string:
// "Hi My name is Jun"
// => "nuJ si eman yM iH"

//Time O(n)
//Space O(n)
const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return null;
  }

  const backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
};

//Time O(1)
//Space O(1)
const reverse2 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse("Hi My Name is Jun"));
console.log(reverse2("Hi My Name is Jun"));
