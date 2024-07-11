import './Main.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero.png';
import shop1 from '../images/shop1.jpg';
import shop2 from '../images/shop2.jpg';
import itemImage1 from '../images/home-shop1.jpg';
import itemImage2 from '../images/home-shop2.jpg';
import bannerImage from '../images/banner.jpg';
import Countdown from 'react-countdown';

const Completionist = () => <p className='cnt-end'>Countdown ended!</p>;

function Main() {
  const [modalImage, setModalImage] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    sectionRefs.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const [showCountdown] = useState(true);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown">
          <div>{days} days</div>
          <div>{hours} hours</div>
          <div>{minutes} minutes</div>
          <div>{seconds} seconds</div>
        </div>
      );
    }
  };

  return (
    <div className="home">
      <section className="hero section-hidden" ref={el => sectionRefs.current[0] = el}>
        <img src={heroImage} alt="Jewelry Banner" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Joana Jewelry</h1>
          <p>Discover the finest jewelry collections crafted with precision and love.</p>
          <Link to="/about">
            <button className="shop-button">See More</button>
          </Link>
        </div>
      </section>

      <section className="gallery section-hidden" ref={el => sectionRefs.current[1] = el}>
        <div className="gallery-item">
          <img src={shop1} alt="Gallery 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={shop2} alt="Gallery 2" className="gallery-image" />
        </div>
      </section>

      <section className="products section-hidden" ref={el => sectionRefs.current[2] = el}>
        <div className="products-column">
          <h2>New Arrivals</h2>
          <Link to="/shop">
            <button className="shop-button">Shop All</button>
          </Link>
        </div>
        <div className="products-column">
          <div className="prod" onClick={() => openModal(itemImage1)}>
            <img src={itemImage1} alt="Item 1" className="prod-image" />
            <div className="prod-overlay">
              <span className="plus-icon">⛶</span>
            </div>
          </div>
          <p>Beautiful Necklace</p>
        </div>
        <div className="products-column">
          <div className="prod" onClick={() => openModal(itemImage2)}>
            <img src={itemImage2} alt="Item 2" className="prod-image" />
            <div className="prod-overlay">
              <span className="plus-icon">⛶</span>
            </div>
          </div>
          <p>Elegant Earrings</p>
        </div>
      </section>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Full Screen" className="modal-image" />
        </div>
      )}

      <section className="banner section-hidden" ref={el => sectionRefs.current[3] = el}>
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h2>Comming Soon</h2>
          <p>Summer Sale Starting Soon!!!</p>
          {showCountdown && (
            <Countdown date={Date.now() + 1000000000} renderer={renderer} />
          )}
          <Link to="/" className="banner-button">Subscribe for access</Link>
        </div>
      </section>

      <section className="contact section-hidden" ref={el => sectionRefs.current[4] = el}>
        <div className="contact-content">
          <h2>Need Help?</h2>
          <p>Get in touch with us for any inquiries or assistance.</p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Main;
