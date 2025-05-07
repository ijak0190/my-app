import React from 'react';

export default function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Pricing</h2>
      <p className="pricing-desc">가격 정보 및 플랜을 여기에 추가하세요.</p>
      <div className="pricing-table">
        <div className="pricing-plan">
          <div className="pricing-plan-title">Basic</div>
          <div className="pricing-plan-price">₩5,000</div>
          <div>기본 기능 제공</div>
        </div>
        <div className="pricing-plan">
          <div className="pricing-plan-title">Standard</div>
          <div className="pricing-plan-price">₩10,000</div>
          <div>표준 기능 제공</div>
        </div>
        <div className="pricing-plan">
          <div className="pricing-plan-title">Premium</div>
          <div className="pricing-plan-price">₩20,000</div>
          <div>모든 기능 제공</div>
        </div>
      </div>
    </section>
  );
}
