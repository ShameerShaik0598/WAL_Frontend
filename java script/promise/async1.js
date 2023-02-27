// let getApi = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// };

// getApi();

let getApi1 = async () => {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(typeof response1);
  let data1 = await response1.json();
  console.table(
    data1.filter(
      (Element) =>
        Element.company.name === "Romaguera-Jacobson" ||
        Element.company.name === "Romaguera-Crona"
    )
  );
};

getApi1();
