import { HeroOverlay } from "./HeroOverlay"

export const HeroItem = ({item}:any) => {
  return (
    <div
    className="w-full h-full relative"
    style={{
      backgroundImage: `url("${item.image}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    >
      {/* overlay */}
      <HeroOverlay/>
    </div>
  )
}
