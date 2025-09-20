"use client";

import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
      <p className="text-md text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
};

export default Header;
