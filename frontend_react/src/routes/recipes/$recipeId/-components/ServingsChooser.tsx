import { twMerge } from "tailwind-merge";

type ServingsWidgetProps = {
  style?: "compact" | "large";
};

export default function ServingsChooser({
  style = "compact",
}: ServingsWidgetProps) {
  // servingsStore verwenden
  //  PlusButton
  //  MinusButton
  //   (evtl. disablen)
  //
  return (
    <div
      className={twMerge(
        "p-2 text-lg",
        style === "large"
          ? "flex h-full items-center space-x-2 rounded bg-white"
          : "space-x-1 rounded-lg border border-dotted border-gray-500",
      )}
    >
      {style === "large" && (
        <span className={"text-gray-500 "}>Show ingredients for</span>
      )}

      {/*

      todo:

        - servings anzeigen
        - PlusButton
        - MinusButton
          - evtl. disable

      */}
    </div>
  );
}
