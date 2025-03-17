type PlusButtonProps = {
  onClick(): void;
};
export default function PlusButton({ onClick }: PlusButtonProps) {
  return (
    <i
      className={
        "fa-solid fa-circle-plus text-orange_2 hover:cursor-pointer hover:text-orange_2-500"
      }
      onClick={onClick}
    />
  );
}
