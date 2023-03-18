//https://randomuser.me/api/',
function getRandomUser() {
  return fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => data.results[0]);
}

async function displayRandomUser() {
  const user = await getRandomUser();
  const container = document.getElementById("user-container");
  container.innerHTML = `
     <hr>
     <img src="${user.picture.large}" alt="Image is not available" />
     <h2>${user.name.first} ${user.name.last}</h2>
     <p>Email : ${user.email}</p>
     <p>Phone : ${user.phone}</p>
     <p>Location : ${user.location.city},${user.location.country}</p>
  `;
}

const generateBtn = document.getElementById("g-button");
generateBtn.addEventListener("click", displayRandomUser);
