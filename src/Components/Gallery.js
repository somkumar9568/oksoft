import React, { useState } from 'react';
import './css/Gallery.css';
import ControlledCarousel from './CustomCarousel'; // Assuming you already have this component
import img1 from './Images/Gallery/1.jpg';
import img2 from './Images/Gallery/2.jpg';
import img3 from './Images/course-1.jpg';
import img4 from './Images/course-2.jpg';
import img5 from './Images/course-3.jpg';
import img6 from './Images/course-4.jpg';
import img7 from './Images/course-5.jpg';
import img8 from './Images/course-6.jpg';




const images = [
  { id: 1, src: img1, alt: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2' },
  { id: 2, src: img3, alt: 'Image 2' },
  { id: 2, src: img4, alt: 'Image 2' },
  { id: 2, src: img5, alt: 'Image 2' },
  { id: 2, src: img6, alt: 'Image 2' },
  { id: 2, src: img7, alt: 'Image 2' },
  { id: 2, src: img8, alt: 'Image 2' },
  { id: 2, src: img4, alt: 'Image 2' },
  { id: 2, src: img5, alt: 'Image 2' },
  { id: 2, src: img6, alt: 'Image 2' },
  { id: 2, src: img7, alt: 'Image 2' },
  { id: 2, src: img8, alt: 'Image 2' },
  { id: 2, src: img4, alt: 'Image 2' },
  { id: 2, src: img5, alt: 'Image 2' },
  { id: 2, src: img6, alt: 'Image 2' },
  { id: 2, src: img7, alt: 'Image 2' },
  { id: 2, src: img8, alt: 'Image 2' },
  
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      {/* Carousel Section */}
      <ControlledCarousel />
      <h2 className='h22'>Our Gallery</h2>

      {/* Lightbox Grid Section */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={image.src} alt={image.alt} className="gallery-img" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>&times;</span>

          <div className="lightbox-content">
            <button className="prev" onClick={showPrevImage}>&#10094;</button>
            <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} className="lightbox-img" />
            <button className="next" onClick={showNextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
