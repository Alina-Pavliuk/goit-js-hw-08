import {default as galleryItems} from './gallery-items.js'
const list = document.querySelector('.js-gallery');
const div = document.querySelector('.js-lightbox');
const molalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
console.log(closeButton);
 
galleryItems.map(item => {
const img = document.createElement('img');
img.classList.add('gallery__image');
img.src = item.preview;
img.setAttribute('data-source', item.original);
img.alt = item.description;

const link = document.createElement('a');
link.classList.add('gallery__link');
link.setAttribute('href', item.original);

link.append(img);

const li = document.createElement('li');
li.classList.add('gallery__item');

li.append(link);

list.append(li);

});

list.addEventListener('click', (e) => {
  e.preventDefault();
  let modalLink = e.target.dataset.source;
  div.classList.add('is-open');
  molalImage.src = modalLink;
});

closeButton.addEventListener('click', () => {
  div.classList.remove('is-open');
  molalImage.src = '';
})

