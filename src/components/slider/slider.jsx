import React, { useState } from "react";
import "./slider.css";

const slides = [
    { id: 1, image: "assets/slide_1.png", title: "Слайд 1" },
    { id: 2, image: "assets/slide_2.webp", title: "Слайд 2" },
    { id: 3, image: "assets/slide_1.png", title: "Слайд 3" },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider">
            <img
                src={slides[current].image}
                alt={slides[current].title}
                className="slider-image"
            />
            <div className="slider-controls">
                <button className="slider-button">Записаться онлайн</button>
                <div className="arrows">
                    <button onClick={prevSlide} className="arrow"><img src="/assets/arrow.png" alt=""/></button>
                    <button onClick={nextSlide} className="arrow arrow--right"><img src="/assets/arrow.png" alt=""/></button>
                </div>
            </div>
        </div>
    );
}
