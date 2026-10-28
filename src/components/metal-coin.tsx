import Image from "next/image";

export function MetalCoin({
  metal,
  className = "",
  preload = false,
}: {
  metal: "gold" | "silver";
  className?: string;
  preload?: boolean;
}) {
  const gold = metal === "gold";
  return (
    <div className={`relative aspect-square overflow-hidden rounded-full bg-[#e8dfcb] shadow-[0_18px_35px_#69461e24] ${className}`}>
      <Image
        src={gold ? "/images/gold-editorial.jpg" : "/images/silver-coins.jpg"}
        alt={gold ? "Illustrative gold coin with a sculpted dragon design" : "Illustrative silver coin with a sculpted lion design"}
        width={gold ? 1800 : 1200}
        height={gold ? 2700 : 1800}
        preload={preload}
        sizes="(max-width: 640px) 650px, 1000px"
        className={`absolute h-auto max-w-none ${gold ? "top-[-151%] left-[-76%] w-[214%]" : "top-[-203%] left-[-157%] w-[363%]"}`}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/45" />
    </div>
  );
}
