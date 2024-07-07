"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.06] items-center justify-center relative overflow-hidden">
      <p className="text-white text-center font-extrabold -translate-y-4">Testimonials</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "As a Software Engineer, integrating AI into our development process has revolutionized how we build and deploy software. AI-driven tools help us identify and fix bugs more efficiently, optimize code for performance, and even automate routine tasks. This not only accelerates our development cycles but also enhances the quality of our software products.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "In my role as a Product Manager, AI has become indispensable. It helps us analyze market trends and customer feedback with unparalleled precision, allowing us to make data-driven decisions that enhance our product offerings. AI tools enable us to forecast demand, prioritize features, and ultimately deliver products that better meet our users' needs.",
    name: "Robert Johnson",
    title: "Product Manager",
  },
  {
    quote: "Working as a Data Scientist, AI is at the core of everything we do. Advanced machine learning algorithms enable us to uncover insights from vast amounts of data that would be impossible to process manually. AI helps us predict trends, understand patterns, and provide actionable insights that drive strategic decisions for the company.",
    name: "Jane Smith",
    title: "Data Scientist",
  },
  {
    quote: "As a UX Designer, AI assists in creating more intuitive and user-friendly interfaces. By analyzing user behavior and feedback, AI helps us design experiences that are not only aesthetically pleasing but also highly functional. It allows us to prototype and test designs quickly, ensuring that we meet the needs and preferences of our users effectively.",
    name: "Emily Davis",
    title: "UX Designer",
  },
  {
    quote: "Developing soaps might seem like a traditional craft, but AI has brought a new dimension to it. By analyzing chemical compositions and user preferences, AI helps us create products that are not only innovative but also cater to specific customer needs. It ensures consistency in quality and aids in experimenting with new formulations efficiently.",
    name: "Tyler Durden",
    title: "Soap Developer",
  },
  {
    quote: "Exploring the world is more exciting with AI. It helps us plan our trips by providing real-time information and recommendations, ensuring we have the best experiences. From language translation to navigation, AI enhances every aspect of our adventures, making them more enjoyable and less stressful.",
    name: "Dora",
    title: "The Explorer",
  },
];

