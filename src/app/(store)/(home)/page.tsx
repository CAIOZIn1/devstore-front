import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          src="/moletom-never-stop-learning 1.png"
          alt="image-moletn"
        />

        <div className="absolute bottom-20 right-28 h-12 flex items-center gap-2 max-w[200px] rounded-full border-2 border-zinc-500 bg-black p-1 pl-5">
          <span className="text-sm truncate text-zinc-200">Moletom IA</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          src="/moletom-ia-p-devs.png"
          alt="image-moletn"
        />

        <div className="absolute bottom-10 right-28 h-12 flex items-center gap-2 max-w[200px] rounded-full border-2 border-zinc-500 bg-black p-1 pl-5">
          <span className="text-sm truncate text-zinc-200">Moletom IA</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $110
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          src="/camiseta-dowhile-2022.png"
          alt="image-moletn"
        />

        <div className="absolute bottom-10 right-28 h-12 flex items-center gap-2 max-w[200px] rounded-full border-2 border-zinc-500 bg-black p-1 pl-5">
          <span className="text-sm truncate text-zinc-200">Moletom IA</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            $69
          </span>
        </div>
      </Link>
    </div>
  )
}
