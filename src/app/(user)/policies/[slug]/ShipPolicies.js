import React from 'react'
import { CheckCircle } from 'lucide-react'

const ShipPolicies = () => {
  return (
   <div className="space-y-12 text-center px-6 py-16 max-w-7xl mx-auto">
  <div className="flex flex-wrap justify-center gap-4">
    {["Licensed & Insured", "24/7 Emergency", "10+ Years Experience", "100% Satisfaction"].map((item, i) => (
      <div key={i} className="flex items-center gap-2 text-black font-[var(--font-primary)]">
        <CheckCircle className="text-success w-5 h-5 flex-shrink-0" />
        <span>{item}</span>
      </div>
    ))}
  </div>

  <div className="bg-secondary rounded-2xl p-8 shadow-sm border border-accent/10 max-w-3xl mx-auto">
    <h3 className="text-2xl font-bold mb-6 text-primary font-[var(--font-primary)]">Get Free Ship Sanitation Quote</h3>
    <button type="submit" className="btn-primary px-6 py-3 text-sm sm:text-base font-[var(--font-primary)]">Request Free Consultation</button>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-primary font-[var(--font-primary)]">Professional Maritime Pest Control</h2>
    <p className="text-black/80 max-w-3xl mx-auto font-[var(--font-arabic)]">
      Our ship sanitation documentation support services ensure vessels meet all international shipping and port entry requirements. We provide comprehensive vessel inspections, pest control documentation, and port compliance services for smooth maritime operations.
    </p>
    <p className="text-black/80 max-w-3xl mx-auto font-[var(--font-arabic)]">
    With extensive experience in maritime pest control and international shipping standards, we help vessel operators maintain compliance and avoid delays in port entry and international trade.
    </p>
  </div>
</div>

  )
}

export default ShipPolicies