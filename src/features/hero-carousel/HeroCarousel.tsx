

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import helper from '@/utils/helper';
import { faker } from '@faker-js/faker';
import { HeroItem } from './HeroItem';
import { useRef, useState } from 'react';
import { CarouselControls } from './CarouselControls';

export function HeroCarousel() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  // go to an slide
  const goToSlide = (index:number) => {
    if (swiperRef.current) {
      //@ts-expect-error error1
      swiperRef.current.slideTo(index);
    }
  }; 

  // slide change event handler
  const handSlideChange = (swiper:any) => {
    setActive(swiper.activeIndex);
  }

  return (
    <div
    className='
    h-screen #bg-red-100 w-full relative mb-12
    '
    >
      <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      // get a reference to the swiper
      onSwiper={(swiper:any) => swiperRef.current = swiper}

      // on slide change
      onSlideChange={handSlideChange}
      
      slidesPerView={1}
      spaceBetween={1}
      pagination={false}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      style={{
        height: '100%'
      }}
      >
        {
          !heros.length ? <></>
          : heros.map((hero:any) => (
            <SwiperSlide
            key={hero.id}
            className='!w-full'
            >
              <HeroItem item={hero}/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>

      <CarouselControls 
      goToSlide={goToSlide} 
      heros={heros}
      active={active}
      setActive={setActive}
      />
    </div>
  );
}

const genres = ['live', 'movie', 'documentary'];
const heros = [
  {
    id: helper.generateId(),
    image: `https://cdn.stocksnap.io/img-thumbs/960w/people-man_PT8C3EOE19.jpg`,
    name: faker.lorem.word(),
    genre: genres[Math.floor(Math.random() * genres.length)],
  },
  {
    id: helper.generateId(),
    image: `https://cdn.stocksnap.io/img-thumbs/960w/comics-read_FU9CFTWNZP.jpg`,
    name: faker.lorem.word(),
    genre: genres[Math.floor(Math.random() * genres.length)],
  },
  {
    id: helper.generateId(),
    image: `https://cdn.stocksnap.io/img-thumbs/960w/vintage-decor_RTHQWD08HL.jpg`,
    name: faker.lorem.word(),
    genre: genres[Math.floor(Math.random() * genres.length)],
  },
  {
    id: helper.generateId(),
    image: `https://cdn.stocksnap.io/img-thumbs/960w/movie%20theatre-theater_VHI2O3X89E.jpg`,
    name: faker.lorem.word(),
    genre: genres[Math.floor(Math.random() * genres.length)],
  },
  {
    id: helper.generateId(),
    image: `https://cdn.stocksnap.io/img-thumbs/960w/people-waiting_1IUZSTU0U5.jpg`,
    name: faker.lorem.word(),
    genre: genres[Math.floor(Math.random() * genres.length)],
  },
]