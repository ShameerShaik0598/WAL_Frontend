let condition = false;

//poster realease

let promiseobj = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (condition === true) {
      resolved("poster released");
    } else {
      rejected("due to technical issues there is delay , sorry");
    }
  }, 5000);
});

//consume promise

promiseobj
  .then((message) => {
    console.log("message from producer", message);
  })
  .catch((err) => {
    console.log("rejected the promise", err);
  });
