import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 20,
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3 text-zinc-200 transition-all duration-200">
      <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#676394]"></div>
      <div className="col-span-2 overflow-hidden cursor-pointer">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src={product.image}
          alt="image-product"
          className="hover:scale-105 transition-transform ease-in duration-500"
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold p-6 hover:bg-zinc-500 transition-all ease-out delay-150"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold p-6 hover:bg-zinc-500 transition-all ease-out delay-150"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold p-6 hover:bg-zinc-500 transition-all ease-out delay-150"
            >
              G
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-800 font-semibold text-white transition-all duration-300 ease-out scale-105"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
