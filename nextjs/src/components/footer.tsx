// Footer.tsx
import {
  HomeIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { BreadcrumbResponsive } from "./breadcrumbs-responsive";

export const Footer = () => {
  const renderSocialLinks = () => (
    <div className="flex justify-center gap-4 mt-4 md:mt-0 md:order-1">
      <a
        href="https://www.facebook.com/search/top?q=Alba%20Growth"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://twitter.com/search?q=Alba%20Growth"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/explore/tags/albagrowth/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/company/alba-growth"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <LinkedinIcon />
      </a>
    </div>
  );

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-auto md:flex md:items-center">
            <BreadcrumbResponsive />
          </div>
          <div className="w-full md:w-auto md:flex md:items-center md:justify-end">
            <a
              href="/privacy-policy"
              className="text-sm font-medium hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm font-medium hover:underline ml-4"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-between items-center">
          {renderSocialLinks()}
          <div className="text-sm text-center mt-4 md:mt-0">
            © Alba Growth, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
