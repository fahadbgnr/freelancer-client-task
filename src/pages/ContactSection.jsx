import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-10" data-aos="fade-down">
          📞 Contact Information
        </h2>

        <div className="text-lg text-gray-700 space-y-6" data-aos="fade-up">
          <p>
            <strong>Phone:</strong>{' '}
            <a
              href="tel:+8801959792191"
              className="text-indigo-600 hover:underline"
              aria-label="Call Phone Number"
            >
              01959792191
            </a>
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:aminulislamfahhad1@gmail.com"
              className="text-indigo-600 hover:underline"
              aria-label="Send Email"
            >
              aminulislamfahhad1@gmail.com
            </a>
          </p>

          <p>
            <strong>Important Notes:</strong>
            <br />
            For inquiries regarding freelance tasks, please contact us during business hours:
            <br />
            <em>Monday to Friday, 9:00 AM to 6:00 PM (GMT+6)</em>
          </p>

          <p>
            When contacting, please provide a clear description of your requirements to help us serve you better.
          </p>

          <p>
            We aim to respond within 24 hours. Thank you for your patience and understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
