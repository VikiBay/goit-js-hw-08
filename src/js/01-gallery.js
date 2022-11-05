// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const lightboxMarkup = galleryItems.map(({preview, original,description}) =>
`
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')

const galleryList = document.querySelector('.gallery')
galleryList.insertAdjacentHTML('beforeend', lightboxMarkup)

var lightbox = new SimpleLightbox('.gallery a', { captionDelay:250, captionsData:"alt" });
// let gallery = new SimpleLightbox('.gallery a');



console.log(galleryItems);
console.log(SimpleLightbox)
