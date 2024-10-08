const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "img/user1.jpg" },
  { name: "Voluptatem", image: "img/user2.jpg" },
  { name: "Explicabo", image: "img/user3.jpg" },
  { name: "Rchitecto", image: "img/user4.jpg" },
  { name: " Beatae", image: "img/user5.jpg" },
  { name: " Vitae", image: "img/user6.jpg" },
  { name: "Inventore", image: "img/user7.jpg" },
  { name: "Veritatis", image: "img/user8.jpg" },
  { name: "Accusantium", image: "img/user9.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}