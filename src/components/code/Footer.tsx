const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 text-sm text-neutral-400 p-8">
      <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <span className="text-neutral-600">|</span>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-center">© {year} Abolore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
