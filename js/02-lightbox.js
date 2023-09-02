import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallertList = document.querySelector('.gallery');
console.log(gallertList)

// розмітка //
const markup = galleryItems.map(({preview, original, description}) =>
{ return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
}    
)
gallertList.insertAdjacentHTML('beforeend', markup.join(''))

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

console.log(galleryItems);
