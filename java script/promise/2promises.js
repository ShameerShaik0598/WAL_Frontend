let condition1 = true;
let condition2 = false;

//meeting

let meet6pm = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (condition1 === true) {
      resolved("hi waiting for you at the theater");
    } else {
      rejected("sorry couldnt make it");
    }
  }, 5000);
});

//popcorn

let buypopcorn = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (condition2 === true) {
      resolved("Here take the popcorn");
    } else {
      rejected("sorry its out of stock");
    }
  }, 7000);
});

//consume promise

meet6pm
  .then((message) => {
    console.log("waiting for you");
    return buypopcorn;
  })
  // .then((message) => {
  //   if(message=="hi waiting for you at the theater"){
  //     console.log(message);
  //     return buypopcorn
  //   }
  //   else{
  //     console.log("sorry for that");
  //   }

  // });

  .then((message) => {
    if (message == "Here take the popcorn") {
      console.log(message);
    } else {
      console.log("sorry again");
    }
  })

  .catch((err) => {
    console.log("err is", err);
  });
