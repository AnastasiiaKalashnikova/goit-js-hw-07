import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallertList = document.querySelector('.gallery');
console.log(gallertList)

// розмітка //
const markup = galleryItems.map(({preview, original, description}) =>
{ return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}    
)

gallertList.insertAdjacentHTML('beforeend', markup.join(''))
// розмітка //


gallertList.addEventListener('click', onClick);


function onClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show()
    
}

// Не працює, бо іистанс - локальна змінна. Як зробити, щоб працювало, придумати не виходить??? //
document.addEventListener('keydown', toClose)

function toClose(evt) {

    if (!basicLightbox.visible()) {
        return
    }
    if (evt.code === "Escape") {
        instance.close() 
    }
}