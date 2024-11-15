const url = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("prodId");
  fetch(url, {
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

    .then((cellArray) => {
      console.log(cellArray);

      const row = document.querySelector(".row");
      const col = document.createElement("div");

      //creazione card dinamiche con i dati forniti nellla backoffice page
      cellArray.forEach((cell) => {
        //body della card
        const col = document.createElement("div");
        col.className = "col-2";

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = cell.imageUrl;

        const a = document.createElement("a");
        a.href = `./details.html?prodId=${cell._id}`;
        console.log(cell._id);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = cell.name;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = cell.description;

        const price = document.createElement("p");
        price.className = "display-6";
        price.innerText = cell.price;

        const btnEdit = document.createElement("a");
        btnEdit.className = "btn btn-primary";
        btnEdit.href = `./backoffice.html?prodId=${cell._id}`;
        btnEdit.innerText = "EDIT";

        /*fetch(url + id, {
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
        };*/
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(price);
        cardBody.appendChild(btnEdit);

        a.appendChild(img);
        card.appendChild(a);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
});

/*const handleCancel = function () {
  fetch(url, {
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
};*/
