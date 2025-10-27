import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
}

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 btn-shine";

  const variants = {
    primary: "bg-primary text-primary-foreground brutal-shadow hover:brightness-110",
    outline:
      "bg-background text-foreground border-4 border-border brutal-shadow hover:bg-muted",
    ghost: "text-foreground hover:bg-muted/50",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    const { onClick, ...rest } = props;
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
