const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const body = document.body;
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[index].src;
    lightbox.classList.add('show');
}

function closeLightbox() {
    lightbox.classList.remove('show');
}


function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        navigate(-1);
    } else if (event.key === 'ArrowRight') {
        navigate(1);
    }
});


lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});


function navigate(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}


document.querySelector('.nav-button.prev').addEventListener('click', function(event) {
    event.stopPropagation();
    navigate(-1);
});

document.querySelector('.nav-button.next').addEventListener('click', function(event) {
    event.stopPropagation();
    navigate(1);
});
