// Get Users from API “https://jsonplaceholder.typicode.com/users” and display users data from the companies “Romaguera-Crona” and “Romaguera-Jacobson”

let read = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) =>
      console.table(
        data.filter(
          (Element) =>
            Element.company.name === "Romaguera-Jacobson" ||
            Element.company.name === "Romaguera-Crona"
        )
      )
    )
    .catch((err) => console.log("err is", err));
};

read();
