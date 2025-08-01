import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BannerCarousel.css";

const banners = [
    {
        id: 1,
        image: "https://media.wired.com/photos/646540bddaed59ebbf460999/3:2/w_1600,c_limit/Where%20to%20Buy%20Vinyl%20Online%20Gear%20GettyImages-1395337634.jpg",
        link: "/info"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?fm=jpg&q=80&w=1600&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbnlsfGVufDB8fDB8fHww",
        link: "/info"
    },
    {
        id: 3,
        image: "https://cdn.wallpapersafari.com/8/25/58UPTz.jpg",
        link: "/info"
    },
    {
        id: 4,
        image: "https://media.wired.com/photos/63868195f2246f0775f62975/3:2/w_1600,c_limit/Victrola-ReSpin-Turntable-Featured-Gear.jpg",
        link: "/info"
    },
    {
        id: 5,
        image: "https://www.rollingstone.com/wp-content/uploads/2024/07/BestAlbumCover_NEW.jpg",
        link: "/info"
    }
];

const BannerCarousel = () => {
    return (
        <div className="banner-carousel-container">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                className="banner-swiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <a href={banner.link} className="banner-slide">
                            <img
                                src={banner.image}
                                alt={`Banner ${banner.id}`}
                                className="banner-image"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
