import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function profile() {
  return (
    <Layout
      title="Profile"
      description="This is the profile page"
      keywords="profile"
    >
      <Image
        src="/images/batmanikos.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="batmanikos image"
      />
    </Layout>
  );
}
