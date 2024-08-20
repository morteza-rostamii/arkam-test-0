import { Button, IconButton } from "@chakra-ui/react"
import { Play, Plus } from "lucide-react"

export const HeroOverlay = () => {
  
  return (
    <div
    className="
    z-[1] absolute bottom-0 left-0 right-0  text-white
    p-10 h-[320px] md:h-[400px] 
    bg-gradient-to-b from-red-900/10 via-gray-900/50 to-black/80 
    
    "
    >
      <section className="container flex items-start justify-center md:justify-start">
        {/* desktop */}
        <div
        className="
        items-center gap-4
        glass_effect1 text-white p-4 py-2 rounded-[9999px]
        hidden md:flex w-fit
        "
        >
          <div
          className="flex items-center gap-4"
          >
            <span>
              لیستِ من
            </span>
            <IconButton
            className="group"
            aria-label="list"
            variant={'outline'}
            icon={<Plus size={20} className="text-white group-hover:text-black"/>}
            isRound={true}
            colorScheme="twitter"
            />
          </div>

          <div
          className="flex items-center gap-4"
          >
            <span>
              الان ببین
            </span>
            <IconButton
            aria-label="list"
            //variant={'outline'}
            icon={<Play size={20}/>}
            isRound={true}
            colorScheme="twitter"
            />
          </div>
        </div>


        {/* mobile */}
        <div
        className="
        items-center gap-4
        #glass_effect1 text-white p-4 py-2 rounded-[9999px]
        flex md:hidden
        "
        >
          <Button
          variant={'outline'}
          colorScheme="twitter"
          borderRadius={'9999px'}
          rightIcon={<Plus className="text-white group-hover:text-black"/>}
          className="group"
          >
            <span className="text-white group-hover:text-black">
            لیست من
            </span>
          </Button>

          <Button
          variant={'solid'}
          colorScheme="twitter"
          borderRadius={'9999px'}
          rightIcon={<Play/>}
          >
            الان ببین
          </Button>
        </div>
      </section>
    </div>
  )
}
