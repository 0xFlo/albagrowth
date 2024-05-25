/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        transform: "transform",
      },
      transitionDuration: {
        "400": "400ms",
        "500": "500ms",
      },
      backgroundColor: ["responsive", "hover", "focus", "active"],
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      boxShadow: {
        "3d-hover":
          "0 35px 40px -15px rgba(0, 0, 0, 0.25), -5px 10px 10px -5px rgba(0, 0, 0, 0.1)",
      },
      perspective: {
        none: "none",
        "3d": "1000px",
      },
      scale: {
        "100": "1",
        "101": "1.01",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".hover-3d": {
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s, box-shadow 0.5s",
          "&:hover": {
            transform: "translateY(-3px) translateX(-1px) scale(1.01)",
            boxShadow:
              "0 35px 40px -15px rgba(0, 0, 0, 0.25), -5px 10px 10px -5px rgba(0, 0, 0, 0.1)",
          },
        },
      });
    },
  ],
};
