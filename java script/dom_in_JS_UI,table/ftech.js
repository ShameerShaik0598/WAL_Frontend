let getApi1 = async () => {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(typeof response1);
  let data1 = await response1.json();
  console.table(data1);
  let tbody = document.querySelector("tbody");
data1.filter((post) => {
  tbody.innerHTML += `
  <tr>
  <td>
  ${post.userId}
  </td>
  <td>
  ${post.id}</td>
  <td>
  ${post.title}</td>
  <td>
  ${post.body}
  </td>
  <td>
  
  </td> 
  </tr> `;


});


};

getApi1();



// let divcontainer=document.querySelector(".containjer")

