"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, GithubIcon, Link } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { projects } from "@/constants/projects";
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

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={AnimationContainerVariants}
      className="w-full py-16 px-6"
      id="project"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Header title="Projects" />
      </div>

      <motion.div
        variants={AnimationItemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            className="shadow-lg rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Header */}
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {project.title}
              </CardTitle>
              <p className="text-sm text-gray-500 mt-2">
                {project.description}
              </p>
            </CardHeader>

            {/* Tech Tags */}
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1 text-sm"
                  >
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={18}
                      height={18}
                    />
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>

              {/* Expanded Details */}
              {expanded === project.id && (
                <div className="mt-4">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {project.subDescription.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>

            {/* Toggle Button */}
            <CardFooter className="mt-auto flex flex-col space-y-4">
              <div className="flex w-full justify-between gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full font-bold">
                    <p>Github</p>
                    <GithubIcon />
                  </Button>
                </a>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="default" className="w-full font-bold">
                    <p>Live Demo</p>
                    <Link />
                  </Button>
                </a>
              </div>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => toggleExpand(project.id)}
              >
                {expanded === project.id ? (
                  <>
                    Hide Details <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View More <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
