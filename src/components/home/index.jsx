import React from "react";
import Wrapper from "./style";
import { useSpring, animated } from "@react-spring/web";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom"; // Don't forget to import NavLink

const Home = () => {
  // Animations for different sections
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const heroTextProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: heroInView ? 1 : 0, transform: heroInView ? "translateY(0)" : "translateY(20px)" },
    delay: 200,
  });
  const buttonProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: heroInView ? 1 : 0 },
    delay: 800,
  });

  const [newCollectionRef, newCollectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const newCollectionProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: newCollectionInView ? 1 : 0, transform: newCollectionInView ? "translateY(0)" : "translateY(30px)" },
    config: { duration: 800 },
    delay: 300,
  });

  const [featureRef, featureInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const featureTextProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: featureInView ? 1 : 0, transform: featureInView ? "translateX(0)" : "translateX(-50px)" },
    config: { duration: 800 },
    delay: 500,
  });
  const featureImageProps = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: featureInView ? 1 : 0, transform: featureInView ? "scale(1)" : "scale(0.9)" },
    config: { duration: 800 },
    delay: 700,
  });

  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const howItWorksProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: howItWorksInView ? 1 : 0, transform: howItWorksInView ? "translateY(0)" : "translateY(30px)" },
    config: { duration: 800 },
    delay: 300,
  });

  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const galleryProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: galleryInView ? 1 : 0, transform: galleryInView ? "translateY(0)" : "translateY(30px)" },
    config: { duration: 800 },
    delay: 300,
  });
  
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const blogProps = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: blogInView ? 1 : 0, transform: blogInView ? "translateY(0)" : "translateY(30px)" },
    config: { duration: 800 },
    delay: 300,
  });

  // Array of image URLs for the gallery
  const galleryImages = [
    '/images/classic+pergola+with+side+curtains.jpg',
    '/images/IMG_7125.jpg',
    '/images/IMG_8993.JPG',
    '/images/geometric+pergola+screens+and+shade.jpg',
    '/images/IMG_20170620_193425.jpg',
    '/images/IMG_20190603_222159.jpg',
    '/images/746ad422-0b2f-4697-baf6-9d6dc2d319a6.jpg',
    '/images/b64900d7-1f37-4abf-ae85-a681c3cf24e7.jpg',
    '/images/a965b460-8c5b-48d2-8f62-18be41d85231.jpg',
    '/images/IMG_0660.JPG',
    '/images/20180604_205121.jpg',
    '/images/d3010adb-dadd-442c-bd40-76fead5b03e1.jpg',
    '/images/c570d0e7-c6bb-4415-9a96-8c56d0f0f473.jpg',
    '/images/white+patio+pergola+with+privacy+panels.jpg'
  ];

  return (
    <Wrapper>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <animated.div style={heroTextProps}>
            <p className="subtitle">Crafting Your Dream Spaces</p>
            <h1>AL WADI CARPENTRY</h1>
            <p className="description">
              Quality woodwork, specializing in doors, windows, dressing cupboards, and bespoke solutions since 1993.
            </p>
          </animated.div>
          <animated.div className="hero-buttons" style={buttonProps}>
            <NavLink to="/gallery" className="btn-primary">View Our Services</NavLink>
            <NavLink to="/contact" className="btn-secondary">Get a Free Quote</NavLink>
          </animated.div>
        </div>
      </section>
      
      {/* New Collection */}
      <section className="new-collection" ref={newCollectionRef}>
        <animated.div style={newCollectionProps}>
          <h2>Furniture new collection</h2>
          <div className="collection-grid">
            <img src="\images\3cb078ea-5142-44d9-afbd-7ad1b14fabe6.jpg" alt="Item 1" />
            <img src="\images\46cd7c15-ffa5-44ad-bc62-9a992ce8a1ab.jpg" alt="Item 2" />
            <img src="\images\basic+black+garden+pergola.jpg" alt="Item 3" />
            <img src="\images\IMG_3228.PNG" alt="Item 4" />
            <img src="\images\IMG_2609.JPG" alt="Item 5" />
          </div>
        </animated.div>
      </section>

      {/* Feature Section */}
      <section className="feature" ref={featureRef}>
        <div className="feature-content-wrapper">
          <animated.div className="feature-text" style={featureTextProps}>
            <h2>Custom Craftsmanship & Quality</h2>
            <p>
              We believe in creating timeless pieces that blend functionality with elegance. Our team of skilled artisans works with you to bring your vision to life, using the finest materials and techniques.
            </p>
          </animated.div>
          <animated.div className="feature-image" style={featureImageProps}>
            <img src="\images\Soft-Lounge-Chair-by-Thomas-Bentzen-Cover-bg.jpg.png" alt="Custom Wood Table" />
          </animated.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works" ref={howItWorksRef}>
        <animated.div style={howItWorksProps}>
          <h2>How it works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Consultation</h3>
              <p>We work with you to understand your needs and choose the best design.</p>
            </div>
            <div className="step">
              <h3>2. Design & Plan</h3>
              <p>Our experts create a detailed plan and provide a clear quote.</p>
            </div>
            <div className="step">
              <h3>3. Production</h3>
              <p>We craft your furniture with precision using high-quality materials.</p>
            </div>
            <div className="step">
              <h3>4. Delivery & Assembly</h3>
              <p>Your finished pieces are delivered and assembled with care.</p>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" ref={galleryRef}>
        <animated.div style={galleryProps}>
          <h2>Inspiration Gallery</h2>
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </animated.div>
      </section>

      {/* Blog Section */}
      <section className="blog" ref={blogRef}>
        <animated.div style={blogProps}>
          <h2>Why Choose Us</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <img src="\images\The-Most-Exquisite-Italian-Craftsmanship-.jpg" alt="Quality Craftsmanship" />
              <h3>Quality Craftsmanship</h3>
              <p>We use premium materials and time-honored techniques for durable and beautiful results.</p>
            </div>
            <div className="blog-card">
              <img src="\images\istockphoto-1409520341-612x612.jpg" alt="Personalized Consultation" />
              <h3>Personalized Service</h3>
              <p>Your vision is our priority. We offer bespoke solutions tailored to your unique style and needs.</p>
            </div>
          </div>
        </animated.div>
      </section>
    </Wrapper>
  );
};

export default Home;