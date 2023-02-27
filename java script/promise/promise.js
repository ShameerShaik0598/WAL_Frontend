let condition = true;

//call you back

let promiseobj = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (condition === true) {
      resolved("hi how are you");
    } else {
      rejected("cant talk now,sorry");
    }
  }, 5000);
});

//consume promise

promiseobj
  .then((message) => {
    console.log("message from frnd", message);
  })
  .catch((err) => {
    console.log("rejected the promise", err);
  });
