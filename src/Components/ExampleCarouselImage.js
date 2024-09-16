import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ backgroundColor: '#ddd', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2>{text}</h2>
    </div>
  );
}

export default ExampleCarouselImage;