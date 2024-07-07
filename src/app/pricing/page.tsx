import React from 'react'
import { CanvasReveal } from '../components/CanvasReveal'

function Pricing() {
  return (
    <div>
      <h1 className='text-white text-4xl ml-28 mt-10 font-bold'>Pricing </h1>
      <CanvasReveal />
      <div className="w-full max-w-[1000px] mx-28 p-6">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Brainwave AI Pricing</h2>
  
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    Brainwave AI offers three distinct pricing plans tailored to meet the varying needs of our users. Whether you're just starting or looking for advanced features, we have a plan that's right for you.
  </p>
  
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Free Plan</h3>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Price:</strong> $0
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    The Free plan is perfect for individuals or small teams who are just getting started with Brainwave AI. It provides access to essential features and allows users to explore the basic functionalities without any financial commitment.
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Who should take it:</strong> Beginners, students, and small teams looking to test the waters before committing to a paid plan.
  </p>
  
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Basic Plan</h3>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Price:</strong> $10 per month
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    The Basic plan offers enhanced features and additional resources compared to the Free plan. It is designed for individuals or teams who need more functionality and are ready to invest in a more comprehensive solution.
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Who should take it:</strong> Freelancers, small businesses, and growing teams looking for an affordable yet powerful AI tool to improve their productivity and efficiency.
  </p>
  
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Premium Plan</h3>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Price:</strong> $20 per month
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    The Premium plan is our most advanced offering, packed with all the features Brainwave AI has to offer. It is ideal for larger teams and organizations that require top-tier performance, priority support, and access to exclusive features.
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
    <strong>Who should take it:</strong> Established businesses, enterprises, and power users who need the full range of Brainwave AI capabilities to maximize their workflow and productivity.
  </p>
  
  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-6 mb-2">Why Choose Brainwave AI?</h3>
  <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-200">
    <li>Comprehensive AI solutions tailored to different needs and budgets.</li>
    <li>User-friendly interface designed to streamline your workflow.</li>
    <li>Reliable customer support to assist you at every step.</li>
    <li>Continuous updates and improvements to ensure you always have access to the latest features.</li>
    <li>Secure and scalable infrastructure to support your growth.</li>
  </ul>
</div>

    </div>
  )
}

export default Pricing
