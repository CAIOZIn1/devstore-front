import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 15, // armazena o valor da api em cache por 15s
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 ">
      <div className="bg-[#adadff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#e22626]"></div>
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg overflow-hidden bg-transparent/80"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500 "
          width={920}
          height={920}
          quality={100}
          src={highlightedProduct.image}
          alt="image-moletn"
        />

        <div className="absolute bottom-20 right-28 h-12 flex items-center gap-2 max-w[200px] rounded-full border-2 border-zinc-500 bg-black p-1 pl-5">
          <span className="text-sm truncate text-zinc-200">
            {highlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden bg-transparent/60"
          >
            <Image
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              src={product.image}
              alt="image-moletn"
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w[200px] rounded-full border-2 border-zinc-500 bg-black p-1 pl-5">
              <span className="text-sm truncate text-zinc-200">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
