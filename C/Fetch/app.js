function fetchData() {
  fetch("http://10.111.3.78:3000/api/users")
    .then(res => res.json())
    .then(data => {

      data.forEach(element => {
        document.querySelector(".result").innerHTML += `
        <div>
        <p>${element.name}</p>
        <p>${element.email}</p>
        </div>`
      });
    })
}