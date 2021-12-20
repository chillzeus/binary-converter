const binary = ["1", "1", "0", "0", "1", "1"];
let addTo = 0.5;
let sum = 0;

for (let i = 0; i < binary.length; i++) { 
  addTo = addTo * 2;
  console.log(addTo)
}

for (let i = 0; i < 10; i++) {
  addTo = addTo * 2;
  //console.log(i)
  if (binary[i] == "1") {
    sum = sum + addTo;
    //console.log(sum)
  }
}