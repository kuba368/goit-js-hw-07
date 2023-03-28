import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");
// console.log(galleryElement);

const createGallery = () => {
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
  galleryElement.insertAdjacentHTML("afterbegin", galleryMarkup);
};
createGallery();

const clickHandler = (e) => {
  if (e.target.nodeName !== "IMG") {
    // console.log(e.target.nodeName);
    return;
  }
  e.preventDefault();
  // console.log(e.target.dataset.source);
  basicLightbox
    .create(`<img src=${e.target.dataset.source} width="1400" height="900">`)
    .show();
};
galleryElement.addEventListener("click", clickHandler);
