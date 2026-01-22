import { MarqueeProps } from './marquee.types'
import './styles.css'

export function Marquee({ activities, animationDuration = 30, reverse = false }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden before:absolute before:from-black/90 before:to-transparent before:inset-y-0 before:left-0 before:w-16 before:bg-linear-to-r before:z-1 after:absolute after:from-black/90 after:to-transparent after:inset-y-0 after:right-0 after:w-16 after:bg-linear-to-l after:z-1">
      <div
        className={`animate-marquee-pause flex w-[200%] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ '--duration': `${animationDuration}s` } as React.CSSProperties}
      >
        <div className="w-1/2">
          <div className="flex w-full gap-4 overflow-hidden px-2 py-1">
            {activities.map((item, index) => (
              <div
                key={index}
                className="bg-black ring-white/60 hover:ring-white flex grow basis-auto flex-col items-center justify-center rounded-xl p-6 shadow-md ring-4 transition duration-150 hover:shadow-lg"
              >
                <h3 className="font-bold mt-1">{item.title}</h3>
                <span className="separate-gradient w-full h-px my-2" />
                <p className="text-white/90 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex w-full gap-4 overflow-hidden px-2 py-1">
            {activities.map((item, index) => (
              <div
                key={index}
                className="bg-black ring-white/60 hover:ring-white flex grow basis-auto flex-col items-center justify-center rounded-xl p-6 shadow-md ring-4 transition duration-150 hover:shadow-lg"
              >
                <h3 className="font-bold mt-1">{item.title}</h3>
                <span className="separate-gradient w-full h-px my-2" />
                <p className="text-white/90 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
