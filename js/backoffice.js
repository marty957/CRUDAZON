const url = "https://striveschool-api.herokuapp.com/api/product/";

const params = new URLSearchParams(window.location.search);
const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", function () {
  form.onsubmit = handleSubmit;
  const id = params.get("prodId");
  if (id) {
    const addBtn = document.querySelector(".btn-success");
    console.log(addBtn);
    addBtn.classList.add("d-none");

    fetch(url + id, {
      method: "PUT",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzE2NjA3MDAsImV4cCI6MTczMjg3MDMwMH0.BYUM8b11fdFq-lOtyMLoUFPM5hHgeziWpkf9Re6T4dg"
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
      })

      .then((inputsToInsert) => {
        console.log(inputsToInsert);
        const { imageUrl, name, description, brand, price, userID } = inputsToInsert;

        document.getElementById("name").value = name;
        document.getElementById("url").value = imageUrl;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("price").value = price;

        const editBtn = document.createElement("a");
        editBtn.className = "btn btn-warning";
        editBtn.innerText = "EDIT";
        form.appendChild(editBtn);
      })
      .catch((err) => console.log(err));
  }
});

const handleSubmit = (e) => {
  e.preventDefault();
  //console.log(e.target.elements);

  //creazione oggetto da poter inviare per fare il metodo Post
  const newProduct = {
    name: e.target.elements.name.value,
    description: e.target.elements.description.value,
    brand: e.target.elements.brand.value,
    imageUrl: e.target.elements.url.value,
    price: e.target.elements.price.value
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzE2NjA3MDAsImV4cCI6MTczMjg3MDMwMH0.BYUM8b11fdFq-lOtyMLoUFPM5hHgeziWpkf9Re6T4dg"
    }
  })
    .then((resp) => {
      if (resp.ok) {
        console.log("product added");
        console.log(resp);
        return resp.json();
      }
    })

    .catch((err) => console.log(err));
};
