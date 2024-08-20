//import styles from './MostanadCard.module.css'

export const MostanadCard = ({item}:any) => {

  return (
    <div
    id="mostanad_card"
    className={`
    
    p-2 bg-red-100 rounded-md overflow-hidden
    cursor-pointer
    
    transition-all duration-500 delay-300
    
    min-h-[300px] w-[200px]
    md:min-h-[445px] md:w-[300px]
    hover:w-[400px]
    md:hover:w-[600px]
    `}
    
    style={{
      background: `url("${item.image}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',

    }}
    
    >
    </div>
  )
}
