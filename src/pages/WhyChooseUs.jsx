import { FaUserCheck, FaClock, FaHandHoldingUsd } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 rounded-2xl mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Why Choose <span className="text-blue-600">TaskHive</span>?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          TaskHive connects clients with top freelancers quickly and securely. Whether you're a developer, designer, or writer — find your next opportunity here!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaUserCheck className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Verified Freelancers</h3>
            <p className="text-gray-600">Work with trusted professionals with proven track records.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaClock className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">Get your tasks done on time without delays.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaHandHoldingUsd className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">We ensure safe and reliable payments for all parties.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;