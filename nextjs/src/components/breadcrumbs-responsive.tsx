"use client";

import React, { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Home as HomeIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemComponent,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItem {
  href: string;
  label: string;
}

function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === "/") {
    return [];
  }
  const paths = pathname.split("/").filter(Boolean);
  return [
    { href: "/", label: "Home" },
    ...paths.map((path, index) => ({
      href: `/${paths.slice(0, index + 1).join("/")}`,
      label: path === "home" ? "Home" : capitalizeAndSpace(path),
    })),
  ];
}

function generateBreadcrumbStructuredData(breadcrumbItems: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };
}

function capitalizeAndSpace(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function BreadcrumbResponsive() {
  const pathname = usePathname() || ""; // Ensure pathname is never null
  const breadcrumbItems = useMemo(
    () => generateBreadcrumbItems(pathname),
    [pathname]
  );
  const breadcrumbJsonLd = useMemo(
    () => generateBreadcrumbStructuredData(breadcrumbItems),
    [breadcrumbItems]
  );

  useEffect(() => {
    const scriptId = "breadcrumb-json-ld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(breadcrumbJsonLd);
  }, [breadcrumbJsonLd]);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItemComponent>
              <BreadcrumbLink
                href={item.href}
                aria-current={
                  index === breadcrumbItems.length - 1 ? "page" : undefined
                }
              >
                {item.label === "Home" ? (
                  <HomeIcon className="h-3.5 w-3.5" />
                ) : (
                  item.label
                )}
              </BreadcrumbLink>
            </BreadcrumbItemComponent>
            {index !== breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
