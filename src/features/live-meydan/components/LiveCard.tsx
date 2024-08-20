import { Play, Plus, Share } from "lucide-react";
import { LiveAction } from "./LiveAction";
import helper from "@/utils/helper";
import { GoDotFill } from "react-icons/go";

const actions = [
  {
    id: helper.generateId(),
    name: 'اشتراک',
    icon: <Share size={14}/>
  },
  {
    id: helper.generateId(),
    name: "لیست  من",
    icon: <Plus size={14}/>
  },
  {
    id: helper.generateId(),
    name: "الان ببین",
    icon: <Play size={14} />
  }
]

export const LiveCard = ({item}:any) => {

  return (
    <div
    className="
    relative group live_card
    cursor-pointer #h-[160px]
    !z-[555555] max-h-52 w-[200px] md:w-[300px]
    transition-transform transform scale-100 duration-300 ease-in-out
    hover:scale-105 hover:!z-[99999] bg-gray-700
    
    
    "
    //style={{zIndex: 4}}
    >
      <div
      className="
      #h-[160px] overflow-hidden rounded-md
      group-hover:rounded-b-none max-h-52 min-h-[100px]
      "
      >
        <img 
        className="inline-block w-full object-cover"
        src={item.image}
        alt={item.name}
        /> 
      </div>

      {/* card footer */}
      <div
      className={`
      flex flex-col gap-3
      absolute top-full left-0 z-[9000000000] bg-gray-700 text-white p-3
      opacity-0 invisible rounded-b-md overflow-hidden w-full
      transition-opacity duration-500 ease-in-out
      group-hover:opacity-100 group-hover:visible
      `}
      >
        <p className="text-base md:text-base font-bold">
          {item.name}
        </p>

        <a 
        className="
        border-r-4 border-cyan-400 pr-2 text-sm #md:text-base
        "
        href="#">
          فصل جدید
        </a>

        <a 
        className="flex items-center gap-2"
        href="#">
          <GoDotFill size={20} color="lightgreen"/>
          <span 
          className="text-sm #md:text-base"
          >
          بهترین ها
          </span>
        </a>

        {/* actions */}
        <div
        className="
        flex items-center gap-3 justify-between
        "
        >
          {
            !actions.length ? <></>
            : actions.map((a:any) => (
              <LiveAction
              key={a.id}
              item={a}
              />
            ))
          }
        </div>
      </div>
    </div>

  )
}
