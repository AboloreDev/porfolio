import React from "react";
import profileImage from "../../../public/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-1">
                <Image
                  src={profileImage}
                  alt="Alabi Fathiu - FullStack Developer"
                  width={320}
                  height={320}
                  className="rounded-3xl object-cover w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-lg"></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-2 border border-gray-200 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex text-center lg:text-left order-2 lg:order-2 max-w-2xl">
            {/* Introduction */}
            <div className="space-y-4">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">
                  👋 Hello, I&apos;m
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                  Alabi Fathiu
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  FullStack Developer
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="rounded-4xl p-2 font-bold"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-4xl p-2 font-bold"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Connect with me
                </p>

                <div className="flex gap-4 justify-center lg:justify-start">
                  {/* GitHub */}
                  <Link
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-gray-900 hover:scale-110 hover:shadow-lg group-hover:bg-gray-900">
                      <Github className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:scale-110 hover:shadow-lg group-hover:bg-blue-600">
                      <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </Link>

                  {/* Twitter */}
                  <Link
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-blue-400 hover:scale-110 hover:shadow-lg group-hover:bg-blue-400">
                      <Twitter className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
