import {useDispatch, useSelector} from 'react-redux'; 
import { LiveCard } from "./LiveCard";
import { Heading1 } from "@/elements/Heading1";
import './Lives.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect } from "react";
import { fetchLives } from '../stores/liveSlice';
import { AppDispatch, RootState } from '@/store';
import { Skeleton} from '@chakra-ui/react';
import helper from '@/utils/helper';

export const Lives = () => {
  const lives:any = useSelector((state:RootState) => state.livesSlice.lives);
  const status = useSelector((state:RootState) => state.livesSlice.status);
  //const error = useSelector((state:RootState) => state.livesSlice.error);
  const dispatch: AppDispatch = useDispatch();

  //const fetchLives = async ():Promise<any> => await dispatch(fetchLives()); 

  useEffect(() => {
    dispatch(fetchLives());
  }, []);

  //if (status === 'loading') return <Spinner color='white'/>;
  
  return (
    <div
    className="
    lives
    mb-12 #overflow-x-clip px-4
    "
    >
      <Heading1 item={{text: 'گزیده هایی از برنامه ها'}}/>
      <Swiper
      slidesPerView={'auto'}
      spaceBetween={10}
      centeredSlides={false}
      freeMode={true}
      // pagination={{
      //   clickable: true,
      // }}
      loop={false}
      modules={[FreeMode, Pagination]}
      //slidesOffsetBefore={0}
      //slidesOffsetAfter={100}
      pagination={false}
      className="mySwiper"
      >
        
          {
            !lives.length 
            ? Array.from({length: 12}).map(() => {
              return(
                <SwiperSlide className="slide" key={helper.generateId()}>
                  <Skeleton className='min-w-[200px] min-h-[200px]'></Skeleton>
                </SwiperSlide>
              )
            })
            : lives.map((item:any) => (
              <SwiperSlide 
              className="slide"
              key={item.id}
              >
                <Skeleton
                isLoaded={(status !== 'loading')}
                >
                <LiveCard
                item={item}
                />
              </Skeleton>
              </SwiperSlide>
            ))
          }
      </Swiper>
    </div>
  )
}