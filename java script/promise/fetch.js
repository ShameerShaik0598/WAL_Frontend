let read = function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) =>
      console.table(
        data.filter((Element) => Element.id >= 45 && Element.id <= 50)
      )
    )
    .catch((err) => console.log("err is", err));
};

read();
