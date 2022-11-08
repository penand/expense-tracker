export type ButtonVariant = "primary" | "secondary" | "clear";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  title: string;
  variant: ButtonVariant;
  size: ButtonSize;
  loading: boolean;
  disabled: boolean;
};
