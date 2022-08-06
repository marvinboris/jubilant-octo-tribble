import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

import './Carousel.scss';

export default ({ children, items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const bannerTitle = document.querySelector('.banner__text .subtitle');

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        bannerTitle.innerHTML = items[nextIndex].altText;
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
        bannerTitle.innerHTML = items[nextIndex].altText;
    }

    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
        bannerTitle.innerHTML = items[newIndex].altText;
    }

    const slides = items.map(item => <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src} className="h-100">
        <div className="h-100 bg-img" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 128, .9), rgba(0, 0, 0, 0)), url(' + item.src + ')' }} />
    </CarouselItem>);

    return <Carousel id="banner-carousel" activeIndex={activeIndex} next={next} previous={previous} className="h-100 carousel-fade BannerCarousel">
        <CarouselIndicators items={items} activeIndex={activeIndex} className="d-lg-flex flex-column align-items-center" onClickHandler={goToIndex} />

        {slides}

        {children}
    </Carousel>;
}

