"use client";
import GoogleMap from "./GoogleMap";
import ContactForm from "./contactForm";
const ContactPage = () => {

  return (
    <>
      <section className="min-h-screen py-8 md:py-12 px-1 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto  space-y-8 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <GoogleMap />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
