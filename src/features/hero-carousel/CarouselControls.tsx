import { HeroNav } from './HeroNav'

export const CarouselControls = ({
  heros,
  goToSlide,
  active,
  setActive,
}:any) => {
  return (
    <div
    className="
    absolute bottom-40 left-1/2 -translate-x-1/2
    flex items-center gap-4 #flex-wrap z-[1]
    "
    >
      {
        !heros.length ? <></>
        : heros.map((hero:any, inx:number) => (
          <HeroNav 
          key={hero.id}
          item={hero}
          goToSlide={goToSlide}
          inx={inx}

          active={active}
          setActive={setActive}
          />
        ))
      }
    </div>
  )
}
