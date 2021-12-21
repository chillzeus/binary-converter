const binary = [];
let addTo = 0.5;
let sum = 0;

function zero() {
	binary.push("0")
  console.log(binary);
  document.getElementById("display").innerHTML = binary;
  summary()
}
function one() {
	binary.push("1")
  console.log(binary);
  document.getElementById("display").innerHTML = binary;
  summary()
}

function summary() {
  for (let i = 0; i < binary.length; i++) { 
    addTo = addTo * 2;
    //console.log(addTo)
  }

  for (let i = 0; i < 10; i++) {
    if (binary[i] == "1") {
      //console.log(addTo)
      sum = sum + addTo;
      console.log(sum)
    }
    addTo = addTo / 2;
  }
}
