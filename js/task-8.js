/* google sheets no work  ===

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

  =====   end google sheets */

// Отримаємо елемент списку з класом "gallery"
const gallery = document.querySelector(".gallery");

// Створимо елемент списку <li>
const listItem = document.createElement("li");

// Створимо елемент зображення <img>
const image = document.createElement("img");

// Отримаємо пряме посилання на зображення
const imageUrl =
  "https://drive.google.com/file/d/1qh50pU1wTKC1uWhvGskRJxXiLkKP_c5Q/uc?export=download";

// Встановимо атрибут src для зображення
image.src = imageUrl;

// Додамо зображення до елемента списку
listItem.appendChild(image);

// Додамо елемент списку до списку галереї
gallery.appendChild(listItem);
