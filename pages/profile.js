import Image from 'next/image';

export default function profile() {
  return (
    <div>
      <Image
        src="/images/batmanikos.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="batmanikos image"
      />
    </div>
  );
}
