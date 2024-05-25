import { Button } from "@/components/ui/button";
import CustomHeader from "@/components/props/CustomHeaderProps";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        <CustomHeader
          level="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900"
          mainText="Alba."
          subText="Empowering Mission-Driven Startups."
        />
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700">
          We help startups grow with SEO, content, and product growth
          strategies.
        </p>
        <div className="flex space-x-4 mt-8">
          <Link
            href="/services"
            aria-label="Explore our services page"
            legacyBehavior
          >
            <Button
              size="lg"
              aria-label="Explore Services"
              className="bg-blue-600 text-white border border-black hover:bg-blue-700 transition-shadow duration-300 ease-in-out transform hover:scale-105"
              style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.75)" }}
            >
              Explore Services
            </Button>
          </Link>
          <Link href="/contact" aria-label="Contact us page" legacyBehavior>
            <Button
              size="lg"
              variant="outline"
              aria-label="Contact Us"
              className="border border-black text-blue-600 hover:text-blue-700 hover:border-blue-700 transition-shadow duration-300 ease-in-out transform hover:scale-105"
              style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.75)" }}
            >
              Contact Us &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
