// nextjs/src/components/Footer.tsx
import { BreadcrumbResponsive } from "@/sections/nav/breadcrumbs";
import { footerSocialLinks, footerLinks } from "@/sections/nav/navigationLinks";

export const Footer = () => {
  const renderSocialLinks = () => (
    <div className="flex justify-center gap-4 mt-4 md:mt-0 md:order-1">
      {footerSocialLinks.map(({ url, Icon }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <Icon className="text-black hover:text-blue-600" />
        </a>
      ))}
    </div>
  );

  const renderFooterLinks = () => (
    <div className="w-full md:w-auto md:flex md:items-center md:justify-end">
      {footerLinks.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          className="text-sm font-bold text-black hover:underline ml-4"
        >
          {name}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-black pb-4">
          <div className="w-full md:w-auto md:flex md:items-center">
            <BreadcrumbResponsive />
          </div>
          {renderFooterLinks()}
        </div>
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-between items-center">
          {renderSocialLinks()}
          <div className="text-sm text-center font-bold mt-4 md:mt-0">
            © Alba Growth, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
