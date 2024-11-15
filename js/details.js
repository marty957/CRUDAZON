const url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);

const id = params.get("prodId");

window.addEventListener("DOMContentLoaded", function () {
  fetch(url + id, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzE2NjA3MDAsImV4cCI6MTczMjg3MDMwMH0.BYUM8b11fdFq-lOtyMLoUFPM5hHgeziWpkf9Re6T4dg"
    }
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("Sorry something went wrong");
      }
    })
    .then((product) => {
      console.log(product);

      const { brand, description, name, price, imageUrl } = product;

      console.log(product._id);

      const container = document.querySelector(".container");
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = imageUrl;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText = name;

      const p = document.createElement("p");
      p.className = "card-text";
      p.innerText = brand + " " + description;

      const priceShowed = document.createElement("p");
      priceShowed.className = "display-6";
      priceShowed.innerText = price;

      const btnDetails = document.createElement("a");
      btnDetails.className = "btn btn-primary";
      btnDetails.innerText = "Edit";
      btnDetails.href = `./backoffice.html?prodId=${product._id}`;
      const btnCancel = document.createElement("a");
      btnCancel.className = "btn btn-danger";
      btnCancel.innerText = "REMOVE";

      btnCancel.onclick = handleCancel;

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(priceShowed);
      cardBody.appendChild(btnDetails);
      cardBody.appendChild(btnCancel);
      card.appendChild(img);
      card.appendChild(cardBody);
      container.appendChild(card);
    })
    .catch((err) => console.log(err));
});
const handleCancel = function () {
  fetch(url + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzE2NjA3MDAsImV4cCI6MTczMjg3MDMwMH0.BYUM8b11fdFq-lOtyMLoUFPM5hHgeziWpkf9Re6T4dg"
    }
  })
    .then((resp) => {
      if (resp.ok) {
        console.log(resp);
        return resp.json();
      }
    })

    .then((canceldObj) => {
      alert("THIS PRODUCT HAS BEEN REMOVED" + canceldObj._id);
      window.location.assign("/");
    })
    .catch((err) => console.log(err));
};
