import React, { useRef, useEffect } from 'react';
import './ImageWithAnimation.css'; 

interface ImageWithAnimationProps {
  imageUrl: string;
}

export const ImageWithAnimation: React.FC<ImageWithAnimationProps> = ({ imageUrl }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.style.opacity = '0';
      let opacity = 0;

      const fadeIn = () => {
        opacity += 0.01;
        img.style.opacity = String(opacity);

        if (opacity < 1) {
          requestAnimationFrame(fadeIn);
        }
      };

      requestAnimationFrame(fadeIn);
    }
  }, [imageUrl]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const img = imgRef.current;
    if (img) {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();

      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;

      img.style.transform = `rotateY(${(x - 50) * 0.7}deg) rotateX(${(y - 50) * -0.7}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (img) {
      img.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    }
  };

  return (
    <picture
      className="img-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imgRef} src={imageUrl} alt="Imagen con animación" />
    </picture>
  );
};


