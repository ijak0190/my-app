import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial-item">
          <div className="testimonial-text">
            "정말 빠르고 안정적인 호스팅 서비스!"
          </div>
          <div className="testimonial-author">- 홍길동</div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text">
            "고객 지원이 24시간이라 너무 편리해요."
          </div>
          <div className="testimonial-author">- 김영희</div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text">"합리적인 가격에 최고의 성능!"</div>
          <div className="testimonial-author">- 이철수</div>
        </div>
      </div>
    </section>
  );
}
