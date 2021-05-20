import Head from 'next/head';
import Image from 'next/image';

export default function profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <Image
        src="/images/batmanikos.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="batmanikos image"
      />
    </div>
  );
}
