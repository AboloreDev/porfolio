"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Briefcase } from "lucide-react";
import Header from "./Header";
import { skills } from "@/constants/stacks";
import { experiences } from "@/constants/projects";
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

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={AnimationContainerVariants}
      className="w-full py-16 px-6"
      id="experience"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Header title="Experience" />
      </div>

      <motion.div
        variants={AnimationItemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Skills Section */}
        <div className="space-y-8">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-muted-foreground">
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
                >
                  <CheckCircle className="text-black w-5 h-5" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-500">{skill.level}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-muted-foreground">
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.backend.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
                >
                  <CheckCircle className="text-black w-5 h-5" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-500">{skill.level}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-md rounded-xl border-l-4 border-l-black"
            >
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-black" />
                  <div>
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-sm text-gray-500">{exp.job}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.date}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {exp.contents.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
