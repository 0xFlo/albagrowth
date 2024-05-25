import { Button } from "@/components/ui/button";
import CustomHeader from "@/components/props/CustomHeaderProps";
import Link from "next/link";

const InteractiveSection = () => {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <CustomHeader
          level="h2"
          className="text-4xl font-semibold mb-6 text-gray-900"
          mainText="Ready to Empower Your Startup?"
        />
        <Link
          href="/signup"
          aria-label="Sign up to join Alba today"
          legacyBehavior
        >
          <Button
            size="lg"
            aria-label="Join Alba today"
            className="bg-green-600 text-white border border-black hover:bg-green-700 transition-shadow duration-300 ease-in-out transform hover:scale-105"
            style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.75)" }}
          >
            Join Alba Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default InteractiveSection;
