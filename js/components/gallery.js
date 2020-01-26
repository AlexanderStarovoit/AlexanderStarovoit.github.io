const galleryFull = document.querySelector('.gallery-full');

const IMAGES = [
	"img/gallery/1.jpg",
	"img/gallery/2.jpg",
	"img/gallery/3.jpg",
	"img/gallery/4.jpg",
	"img/gallery/5.jpg",
	"img/gallery/6.jpg",
	"img/gallery/7.jpg",
	"img/gallery/8.jpg",
	"img/gallery/9.jpg",


];

function renderImages() {
	let html = '';

	for (let i=0; i<IMAGES.length; i++) {
		html += `
			<img
				class="gallery-item"
				src="${IMAGES[i]}"
				onclick="renderFullImage(${i})"
			/>
		`;
	}

	document.querySelector('.gallery-container').innerHTML = html;
}
renderImages();

function renderFullImage(num) {
	galleryFull.style.display = 'flex';
	galleryFull.innerHTML = `
			<img
				class="gallery-full-item"
				src="${IMAGES[num]}"
			/>
			<img
				class="gallery-close"
				src="img/gallery/close.png"
				onclick="closeFullScreen()"
			/>

	`;
}

function closeFullScreen() {
	galleryFull.style.display = 'none';
}



