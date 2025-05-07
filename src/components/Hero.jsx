import React from 'react';
import heroImg from '../assets/hero.png'; // 예시 이미지, 실제 파일명에 맞게 교체

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Premium Web Hosting for Your Website</h1>
        <p className="hero-desc">
          Blazing fast web hosting for individuals and businesses of all sizes
          backed by 24x7x365 Support.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <img src={heroImg} alt="Hero" className="hero-img" />
    </section>
  );
}
