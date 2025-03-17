import { twMerge } from "tailwind-merge";

type MinusButtonProps = {
  disabled?: boolean;
  onClick(): void;
};
export default function MinusButton({ disabled, onClick }: MinusButtonProps) {
  return (
    <i
      className={twMerge(
        "fa-solid fa-circle-minus text-orange_2 hover:cursor-pointer hover:text-orange_2-500",
        disabled && "cursor-default text-gray-300 hover:text-gray-300",
      )}
      onClick={onClick}
    />
  );
}
