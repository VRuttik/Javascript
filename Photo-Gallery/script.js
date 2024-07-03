const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Example array of image URLs (replace with your images or fetch dynamically)
const images = [
  'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1369068/pexels-photo-1369068.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/46231/water-lilies-pink-water-lake-46231.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/132474/pexels-photo-132474.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600'
];

// Load images into the gallery
images.forEach((imageUrl, index) => {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = `Image ${index + 1}`;
  img.addEventListener('click', () => openLightbox(imageUrl));
  gallery.appendChild(img);
});

function openLightbox(imageUrl) {
  lightboxImg.src = imageUrl;
  lightbox.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox is open
}

function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling when lightbox is closed
}
