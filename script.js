function summary() {
    const binary = [];
    let addTo = 0.5;
    let sum = 0;
    let binaryJoined = 0;
    for (let i = 0; i < binary.length; i++) {
        addTo = addTo * 2;
    for (let i = 0; i < 10; i++) {
        if (binary[i] == "1") {
            //console.log(addTo)
            sum = sum + addTo;
            console.log(sum)
        }
        addTo = addTo / 2;
            if (buttonPress = 0) {
                binary.push("0")
                let binaryJoined = binary.join();
                document.getElementById("display").innerHTML = binaryJoined;
            } if (buttonPress = 1) {
                binary.push("1")
                let binaryJoined = binary.join();
                document.getElementById("display").innerHTML = binaryJoined;
            }
        }
    }
}

function zero() {
    binary.push("0")
    let binaryJoined = binary.join();
    document.getElementById("display").innerHTML = binaryJoined;
}
function one() {
    binary.push("1")
    let binaryJoined = binary.join();
    document.getElementById("display").innerHTML = binaryJoined;
}

summary()
    

// function clearIt() {
//   binary = ;
//   //addTo = 0.5;
//   //sum = 0;
//   document.getElementById("display").innerHTML = "enter your stuff"
// }