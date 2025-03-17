import ServingsChooser from "../$recipeId/-components/ServingsChooser.tsx";
import { showGlobalServings } from "../../../react-demo-config.tsx";

export default function GlobalServingsWidget() {
  if (!showGlobalServings) {
    return null;
  }

  return (
    <div
      className={"container mx-auto me-4 flex h-14 items-center justify-end"}
    >
      <ServingsChooser style={"large"} />
    </div>
  );
}
