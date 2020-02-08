const galleryFull = document.querySelector('.gallery-full');

const IMAGES = [
	"img/gallery/1.JPG",
	"img/gallery/2.JPG",
	"img/gallery/3.JPG",
	"img/gallery/4.JPG",
	"img/gallery/5.JPG",
	"img/gallery/6.JPG",
	"img/gallery/7.JPG",
	"img/gallery/8.JPG",
	"img/gallery/9.JPG",
	"img/gallery/10.JPG",
	"img/gallery/11.JPG",
	"img/gallery/12.JPG",
	"img/gallery/13.JPG",
	"img/gallery/14.JPG",
	"img/gallery/15.JPG",


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



