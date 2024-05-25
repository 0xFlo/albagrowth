// components/props/CustomHeaderProps.tsx
interface CustomHeaderProps {
  level: "h1" | "h2";
  className?: string;
  mainText: string;
  subText?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  level,
  className,
  mainText,
  subText,
}) => {
  const Tag = level as keyof JSX.IntrinsicElements; // This ensures type safety for dynamic tag names

  return (
    <Tag
      className={`max-w-4xl font-heading font-semibold ${className} tracking-tighter`}
    >
      <span>{mainText} </span>
      {subText && <span className="as-subheading">{subText}</span>}
    </Tag>
  );
};

export default CustomHeader;
