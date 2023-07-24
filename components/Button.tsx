import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rigthIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean | null;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rigthIcon,
  handleClick,
  isSubmitting,
  type,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting || false}
      className={`flexCenter gap-3 px-4 py-3 
      ${textColor || "text-white"}
      ${
        isSubmitting ? "bg-black/50" : bgColor || "bg-primary-purple"
      } rounded-xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left" />}
      {title}
      {rigthIcon && <Image src={rigthIcon} width={14} height={14} alt="right" />}
    </button>
  );
};

export default Button;
