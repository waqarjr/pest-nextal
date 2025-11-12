"use client";

export default function FleaControl() {
  return (
    <section className="py-12 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-heading mb-5">Why Choose Our Flea Control?</h2>
        <p className="text-[var(--color-black)]/70 mb-6 max-w-2xl mx-auto">We combine expertise, pet safety, and comprehensive prevention to deliver the best flea control in Dubai.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature title="Flea Control Specialists" desc="Licensed technicians with specialized flea control training and experience" />
          <Feature title="Pet-Safe Methods" desc="Pet-safe flea control methods protecting animals and families" />
          <Feature title="Emergency Response" desc="24/7 emergency response for urgent flea infestations" />
          <Feature title="Proven Results" desc="Thousands of successful flea control treatments with guaranteed results" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="card flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-[var(--color-success)] mb-2">{title}</h3>
      <p className="text-[var(--color-black)]/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
