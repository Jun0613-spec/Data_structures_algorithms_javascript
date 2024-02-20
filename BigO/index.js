//Time complexity O(n);
//Space O(1)
const booooo = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("booooo!!");
  }
};

booooo(6);

//time O(n)
//space O(n)
const arrayOfHiNTimes = (n) => {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }

  return hiArray;
};

console.log(arrayOfHiNTimes(6));
