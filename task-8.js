/* google sheets no work*/

function getGalleryData() {
  const spreadsheetId = "1nN4z-PGNNkwQHKr-qOisLya7lHVbrFBlaU7zF1OIX6A";
  const range = "catalog_products!A2:B"; // Припустимо, дані знаходяться на Листі1, починаючи з комірки A2

  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=${range}&tqx=out:json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.querySelector(".gallery");
      const rows = data.table.rows;

      rows.forEach((row) => {
        const imageUrl = row.c[0].v; // Перший стовпець - URL зображення
        const text = row.c[1].v; // Другий стовпець - текст

        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");

        img.src = imageUrl;
        p.textContent = text;

        li.appendChild(img);
        li.appendChild(p);
        gallery.appendChild(li);
      });
    });
}

// Виклик функції для отримання та відображення даних
getGalleryData();

/* end google sheets */
