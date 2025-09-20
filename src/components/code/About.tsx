"use client";

import React from "react";
import Header from "./Header";
import profileImage from "../../../public/profile-img.jpg";
import { motion } from "framer-motion";

// Defining animation variants
const AnimationContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const AnimationItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
import Image from "next/image";
import { Card, CardDescription } from "../ui/card";
import { Award, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={AnimationContainerVariants}
      className="py-6"
      id="about"
    >
      <div className="mb-6">
        <Header subtitle="Get to know more" title="About Me" />
      </div>

      <motion.div
        className="flex flex-col w-full md:flex-row gap-5 md:gap-10"
        variants={AnimationItemVariants}
      >
        {/* Left image */}
        <Image
          src={profileImage}
          alt=""
          width={400}
          height={400}
          className=" object-contain mx-auto md:mx-0 rounded-xl"
        />
        {/* Right Details */}
        <div className="p-2 flex-1">
          <motion.h4 className="flex flex-col space-y-4">
            <div className="flex gap-4 w-full flex-col md:flex-row">
              <Card className="w-full">
                <CardDescription className="text-center px-6 py-2 space-y-3">
                  <div className="flex items-center justify-center">
                    <Award size={40} />
                  </div>
                  <h2 className="font-bold text-black dark:text-white text-xl">
                    Experience
                  </h2>
                  <p>2+ years</p>
                  <p>Full Stack Development</p>
                </CardDescription>
              </Card>
              <Card className="w-full">
                <CardDescription className="text-center px-6 py-2 space-y-3">
                  <div className="flex items-center justify-center">
                    <GraduationCap size={40} />
                  </div>
                  <h2 className="font-bold text-black dark:text-white text-xl">
                    Education
                  </h2>
                  <p>B.Sc. Bachelors Degree</p>
                </CardDescription>
              </Card>
            </div>

            <div className="text-muted-foreground">
              I&apos;m a Fullstack developer with 2+ years of experience,
              building complete web solutions that combine exceptional frontend
              design with robust backend systems to deliver scalable
              applications that exceed expectations. I create end-to-end digital
              experiences With comprehensive expertise across the full
              development stack, I craft intuitive user interfaces while
              architecting powerful server-side systems. I understand both
              client needs and technical requirements, delivering solutions that
              are visually stunning, performant, and maintainable. Having
              collaborated with startups and established companies across
              various industries, I&apos;m a reliable partner for your complete
              project needs. My experience spans responsive web applications,
              RESTful APIs, database design, authentication systems, and cloud
              deployment. I focus on creating seamless full-stack experiences
              from user interaction to data processing. With numerous live
              projects under my belt, I offer valuable insights and innovative
              solutions to both frontend and backend challenges. You get
              comprehensive fullstack expertise covering modern technologies and
              best practices. Together, we can architect and deliver cohesive,
              scalable solutions that grow with your business.
            </div>
          </motion.h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
