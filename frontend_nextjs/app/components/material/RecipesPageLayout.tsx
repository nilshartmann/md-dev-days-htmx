import { ReactNode } from "react";
import RecipesHeader from "../layout/RecipesHeader.tsx";
import { Timer } from "../Timer.tsx";

type RecipesPageLayoutProps = {
  children: ReactNode;
};

export function RecipesPageLayout({ children }: RecipesPageLayoutProps) {
  return (
    <>
      <RecipesHeader>{<Timer />}</RecipesHeader>
      <main className={"flex flex-grow flex-col"}>
        {children}
        {/*<Suspense fallback={<GlobalLoadingIndicator />}>{children}</Suspense>*/}
      </main>
    </>
  );
}
