import styles from './HeroNav.module.css'

export const HeroNav = ({item, goToSlide, inx, active,}:any) => {

  const handClick = () => {
    goToSlide(inx);
    //setActive(inx);
  }
  
  return (
    <>
    <button 
    className={`${active === inx && 'border-b-2 font-bold text-2xl'} ${styles.nav_btn} border-cyan-400 p-4 min-w-[100px]
    rounded-md hidden md:block text-white text-xl
    `}
    onClick={handClick}>
      {item.name}
    </button>

    <span 
    className={`${active === inx && 'bg-cyan-500'} ${styles.nav_btn} w-4 h-4 rounded-md cursor-pointer
    block md:hidden
    `}
    onClick={handClick}>
    </span>
    </>
  )
}
