import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const aboutContent = {
  title: 'About TaskHive',
  intro:
    'TaskHive is a modern freelance task marketplace designed to empower both freelancers and clients. It serves as a reliable platform where users can easily post jobs, connect, and collaborate to get work done efficiently.',
  mission:
    'Our mission is to bridge the gap between talent and opportunity — providing a smooth and secure environment where freelancers thrive and clients find the right expertise effortlessly.',
  features: [
    'Post & manage freelance jobs with deadlines and budgets',
    'Secure login/signup using Firebase Authentication',
    'User-specific dashboards to track posted jobs and status',
    'Clean UI/UX built with React, Tailwind CSS, and DaisyUI',
    'Dynamic data rendering from MongoDB via Express API',
    'Role-based access control and conditional nav rendering',
    'Realtime alert notifications with SweetAlert2',
    'Payment integration ready (e.g. Stripe)',
  ],
  techStack: [
    'React JS',
    'React Router DOM',
    'Firebase Authentication',
    'Node.js + Express.js',
    'MongoDB',
    'Tailwind CSS + DaisyUI',
    'AOS Animation',
    'React Toastify & SweetAlert2',
  ],
  closing:
    "TaskHive is more than just a project — it's a full-stack freelance ecosystem built with scalability, security, and simplicity in mind. Whether you're a developer, designer, or data specialist, TaskHive is here to help you shine.",
};

const BulletItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <CheckCircle size={20} className="mt-1 text-indigo-500 shrink-0" />
    <span className="text-gray-700 text-sm sm:text-base">{text}</span>
  </li>
);

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <Helmet>
        <title>TaskHive | About Us</title>
      </Helmet>

      <div className="w-full max-w-4xl mx-auto space-y-8 text-gray-700">
        <h2
          className="text-2xl sm:text-4xl font-bold text-indigo-600 text-center"
          data-aos="fade-down"
        >
          {aboutContent.title}
        </h2>

        <p className="text-sm sm:text-base leading-relaxed" data-aos="fade-up">
          {aboutContent.intro}
        </p>

        <div>
          <h3
            className="text-lg sm:text-2xl font-semibold text-indigo-500 mt-6"
            data-aos="fade-right"
          >
            🎯 Mission
          </h3>
          <p className="text-sm sm:text-base leading-relaxed" data-aos="fade-left">
            {aboutContent.mission}
          </p>
        </div>

        <div>
          <h3
            className="text-lg sm:text-2xl font-semibold text-indigo-500 mt-6"
            data-aos="fade-right"
          >
            🚀 Key Features
          </h3>
          <ul className="space-y-3 pl-1 sm:pl-2" data-aos="fade-left">
            {aboutContent.features.map((item, idx) => (
              <BulletItem key={idx} text={item} />
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-lg sm:text-2xl font-semibold text-indigo-500 mt-6"
            data-aos="fade-right"
          >
            🛠️ Tech Stack
          </h3>
          <ul className="space-y-3 pl-1 sm:pl-2" data-aos="fade-left">
            {aboutContent.techStack.map((item, idx) => (
              <BulletItem key={idx} text={item} />
            ))}
          </ul>
        </div>

        <p className="text-sm sm:text-base leading-relaxed pt-4" data-aos="fade-up">
          {aboutContent.closing}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
