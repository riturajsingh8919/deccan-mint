import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false, onClick }: { compact?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/#home"
      aria-label="Deccan Mint home"
      onClick={onClick}
      className={`relative block aspect-[1000/230] min-w-0 max-w-full overflow-hidden ${compact ? "w-[238px] min-[360px]:w-[266px] sm:w-[296px]" : "w-[292px] sm:w-[324px]"}`}
    >
      <Image
        src="/logo.png"
        alt="Deccan Mint"
        width={1000}
        height={290}
        loading={compact ? "eager" : undefined}
        sizes={compact ? "(min-width: 640px) 296px, (min-width: 360px) 266px, 238px" : "(min-width: 640px) 324px, 292px"}
        className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2"
      />
    </Link>
  );
}
