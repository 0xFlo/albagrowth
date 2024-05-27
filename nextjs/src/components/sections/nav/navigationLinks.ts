// nextjs/src/constants/navigationLinks.ts
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export const footerSocialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/search/top?q=Alba%20Growth",
    Icon: FacebookIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/search?q=Alba%20Growth",
    Icon: TwitterIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/explore/tags/albagrowth/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/alba-growth",
    Icon: LinkedinIcon,
  },
];

export const footerLinks = [
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms of Service", url: "/terms-of-service" },
];

export const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Case Studies", url: "/case-studies" },
  { name: "Team", url: "/team" },
  { name: "Contact Us", url: "/contact" },
  { name: "Log in", url: "/login" },
  { name: "Sign up", url: "/signup" },
];
