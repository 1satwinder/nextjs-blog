import Image from 'next/image';

export const MyImage = () => (
  <Image
    src="/image/profile.jpg" // Route of the image file
    height={244} // Desired size with correct aspect ratio
    width={244} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)