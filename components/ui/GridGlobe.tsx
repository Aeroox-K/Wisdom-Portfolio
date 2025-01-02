import { Globe } from "./Globe";

Globe;

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <Globe className="top-5" />
    </div>
  );
}
