import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");

const createGallery = () => {
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
    )
    .join("");
  galleryElement.insertAdjacentHTML("afterbegin", galleryMarkup);
};
createGallery();

const galleryLightBox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  enableKeyboard: true,
});
