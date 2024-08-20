import { MostanadCard } from "./MostanadCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import helper from "@/utils/helper";
import { Heading1 } from "@/elements/Heading1";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMostanads } from "../stores/mostanadSlice";
import { Skeleton, } from "@chakra-ui/react";

export const Mostanad = () => {
  const mostanads:any = useSelector((state:RootState) => state.mostanadsSlice.mostanads);
  const status = useSelector((state:RootState) => state.mostanadsSlice.status);
  //const error = useSelector((state:RootState) => state.mostanadsSlice.error);
  const dispatch: AppDispatch = useDispatch();

  //const fetchLives = async ():Promise<any> => await dispatch(fetchLives()); 

  useEffect(() => {
    dispatch(fetchMostanads());
  }, []);

  //if (status === 'loading') return <Spinner color='white'/>;

  return (
    <div
    className="
    mostanad
    px-4
    "
    >
      <Heading1 item={{text: 'مستند'}}/>

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
      slidesOffsetBefore={0}
      slidesOffsetAfter={200}
      pagination={false}
      className="mySwiper"
      >
        {
          !mostanads.length 
          ?Array.from({length: 12}).map(() => {
            return(
              <SwiperSlide className="slide" key={helper.generateId()}>
                <Skeleton className='min-w-[200px] min-h-[300px]'></Skeleton>
              </SwiperSlide>
            )
          }) 

          : mostanads.map((item:any) => (
            <SwiperSlide 
            className="slide"
            key={item.id}
            >
              <Skeleton
              isLoaded={(status !== 'loading')}
              >
                <MostanadCard
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