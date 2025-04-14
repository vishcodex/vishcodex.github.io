
import { removeBackground, loadImage } from './imageUtils';

export interface BackgroundStyle {
  gradient: string[];
  opacity: number;
  pattern?: 'circuit' | 'code' | 'network' | 'abstract';
}

export const createOpalTechBackground = async (imageFile?: File): Promise<string> => {
  // Default opal-inspired color gradient
  const opalColors = [
    'rgba(229, 222, 255, 0.7)',   // Soft Purple
    'rgba(211, 228, 253, 0.7)',   // Soft Blue
    'rgba(155, 135, 245, 0.7)',   // Primary Purple
    'rgba(30, 174, 219, 0.5)',    // Bright Blue
  ];

  // Create a gradient background
  const gradientBackground = `
    linear-gradient(
      45deg, 
      ${opalColors.join(', ')}
    )
  `;

  // If an image is provided, remove its background
  if (imageFile) {
    try {
      const image = await loadImage(imageFile);
      const backgroundRemovedBlob = await removeBackground(image);
      const backgroundRemovedUrl = URL.createObjectURL(backgroundRemovedBlob);
      
      return `
        background: 
          url(${backgroundRemovedUrl}) no-repeat center center, 
          ${gradientBackground};
        background-size: cover, cover;
        background-blend-mode: overlay;
      `;
    } catch (error) {
      console.error('Background removal failed, using default gradient', error);
    }
  }

  // Fallback to gradient background with tech-inspired overlay
  return `
    background: ${gradientBackground};
    background-image: 
      radial-gradient(rgba(49, 130, 206, 0.1) 10%, transparent 20%),
      linear-gradient(45deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%);
    background-size: 50px 50px, 100% 100%;
  `;
};

export const applyBackgroundToElement = (element: HTMLElement, backgroundStyle: string) => {
  element.style.cssText += backgroundStyle;
};
