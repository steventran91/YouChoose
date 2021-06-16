import React, { useState, useEffect } from 'react';

export default function FoodGallery({ images = [], interval = 3000 }) {
    const [thumbnails, setThumnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [previousSlideStyle2, setPreviousSlideStyle2] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [nextSlideStyle2, setNextSlideStyle2] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });

        if (currentSlide === 1) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')"
            });
            setPreviousSlideStyle2({
                backgroundImage: "url('" + images[images.length - 1] + "')"
            });
        } else if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')"
            });
            setPreviousSlideStyle2({
                backgroundImage: "url('" + images[currentSlide - 2] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length - 1] + "')"
            });
            setPreviousSlideStyle2({
                backgroundImage: "url('" + images[images.length - 2] + "')"
            });
        }

        if (currentSlide === images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')"
            });
            setNextSlideStyle2({
                backgroundImage: "url('" + images[1] + "')"
            });
        } else if (currentSlide === images.length - 2) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')"
            });
            setNextSlideStyle2({
                backgroundImage: "url('" + images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')"
            });
            setNextSlideStyle2({
                backgroundImage: "url('" + images[currentSlide + 2] + "')"
            });
        } 

        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    function previous() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(thumbnails.length - 1);
        }
    }

    function next() {
        if (currentSlide === thumbnails.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <section className="food-gallery">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle2} className="slide-thumbnail"></div>
                </section>
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle2} className="slide-thumbnail"></div>
                </section>
            </div>

            <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    )
}