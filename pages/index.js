import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import iconGithub from '../public/github.svg';
import iconBlog from '../public/blog-solid.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linhx</title>
        <meta name="description" content="Linhx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen font-mono">
        <Image
          src="/avatar.png"
          width={200}
          height={200}
          className="bg-no-repeat rounded-full"
        />

        <p className='mt-6 text-xl'>Hi 👋, I'm a developer.</p>

        <div className="mt-10 flex flex-row space-x-7">
          <Link href="https://github.com/linhx" target="_blank">
            <Image src={iconGithub.src} width={30} height={30} />
          </Link>
          <Link href="https://note.linhx.com" target="_blank">
            <Image src={iconBlog.src} width={30} height={30} />
          </Link>
        </div>
      </div>
    </>
  );
}
