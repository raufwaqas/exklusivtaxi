// utils/image.ts

export const getImagePath = (
  screen: string,
  imageName: string,
  format: string
): string => {
  let path = '';
  switch (screen) {
    case 'desktop':
      path = `/images/desktop/${imageName}.${format}`;
      break;
    case 'tablet':
      path = `/images/tablet/${imageName}.${format}`;
      break;
    case 'mobile':
    default:
      path = `/images/mobile/${imageName}.${format}`;
      break;
  }
  return path;
};
