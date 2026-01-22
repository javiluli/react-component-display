export function BackgroundContent() {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-between max-w-lg mx-auto py-3 px-8 bg-white/10 rounded-2xl border border-white/25">
          <p className="font-semibold">Lupa</p>
          <div className="flex gap-4">
            <div>
              <p className="font-semibold">Home</p>
            </div>
            <div>
              <p className="font-semibold">Docs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full gap-8 items-center justify-center">
        <div className="py-2 px-4 bg-white/5 rounded-2xl border border-white/15">
          <p className="font-semibold text-xs">New backgroun</p>
        </div>

        <h1 className="font-bold text-4xl">This is a title</h1>

        <div className="flex gap-4">
          <div className="py-2 px-6 bg-white rounded-2xl border border-white bg-blend-normal">
            <p className="font-semibold text-black">Learn more</p>
          </div>

          <div className="py-2 px-6 bg-white/5 rounded-2xl border border-white/15 bg-blend-normal">
            <p className="font-semibold text-white/80">Get starter</p>
          </div>
        </div>
      </div>
    </div>
  )
}
