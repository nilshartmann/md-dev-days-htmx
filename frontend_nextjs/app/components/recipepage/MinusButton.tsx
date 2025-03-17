type MinusButtonProps = {
  onClick(): void;
};
export default function MinusButton({ onClick }: MinusButtonProps) {
  return (
    <i
      className={
        "fa-solid fa-circle-minus text-orange_2 hover:cursor-pointer hover:text-orange_2-500"
      }
      onClick={onClick}
    />
  );
}
