import Header from '@/components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1680px] grid-rows-[min-content_max-content] gap-5 px-8 p-8">
      <Header />
      {children}
    </div>
  )
}
