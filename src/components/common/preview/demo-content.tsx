export function DemoContent() {
  return (
    <section className="relative h-full p-4">
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between rounded-lg border border-white/15 bg-white/5 px-6 py-2 backdrop-blur-sm">
        <strong className="text-sm font-semibold">Lupa</strong>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span>Home</span>
          <span>Docs</span>
          <span className="rounded-lg bg-white px-3 py-1.5 text-black">Sign in</span>
        </div>
      </nav>

      <main className="relative flex h-full flex-col items-center justify-center gap-8 text-center">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm">
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-black">New</span>
          <span className="text-xs font-semibold">Just shipped v2.0</span>
        </div>

        <span className="text-4xl font-bold leading-tight">This is a title</span>

        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-white bg-white px-4 py-1.5 font-semibold text-black">
            Get starter
          </button>
          <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-1.5 font-semibold text-white/80 backdrop-blur-sm">
            Learn more
          </button>
        </div>
      </main>
    </section>
  )
}
