$(document).ready(function () {
  //ON START
  function countDownToCheckTime() {
    setInterval(() => { displayTime(); }, 500); //1 second countdown - calls function to get moment
  };
  countDownToCheckTime();

  function displayTime() {
    let realTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    document.querySelector('.currentTime').innerHTML = (realTime);
  };

  //Set Variables
  let arrayA = ["Auto", "Home", "Food", "Clothes", "School", "Entertainment"];

  //Array of Arrays MATRIX
  let arrayTwo = ["ArrayA", "ArrayB", "ArrayC", "ArrayD"];

  //Basic FOR Loop #1
  function loopOne() {
    for (let i = 0; i < arrayA.length; i++) {
      console.log("cl:1 basic for loop output item:" + " " + [arrayA[i]]);
    }
  }
  loopOne();
  //While loop(s)

  function loopTwo() {
    let j = 0;
    do {
      console.log("cl:2 DO WHILE LOOP" + " " + [arrayA[j]]);
      j++;
    } while (j < 5);
  }
  loopTwo();

  //FOR EACH Loop #3
  //  Long form
  // function loopThree() {
  //   array.forEach((element) => {
  //     console.log("cl:3" + element);
  //   });
  // }
  // with Arrow function
  function loopThree(array) {
    arrayA.forEach((element) => console.log("cl:3" + " " + element));
    arrayTwo.forEach((element) => console.log("cl:4" + " " + element));
  }
  loopThree();


}); //CURRENTLY EMPTY DEPLOY FULL PAGE FOR JQUERY
//event prevent default for forms
// event.preventdefault();
//switch case
//if else
//jquery loops?

//End of CODE
