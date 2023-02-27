let data = async () => {
  let response1 = await fetch("https://reqres.in/api/users?page=2");
  let extractdata = await response1.json();
  console.log(extractdata);

  let container = document.querySelector(".container");
  extractdata.data.filter((details) => {
    container.innerHTML += `
  <div class="card">
  <img src="${details.avatar}" alt="picture" />
  <p>${details.first_name} ${details.last_name}
  </p>
  <p>${details.email}</p>
  
  </p>
  </div>
  `;
  });
};

data();
