import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/#home" aria-label="Deccan Mint home" className="inline-block max-w-full shrink-0">
      <span className={`relative block w-[232px] max-w-full overflow-hidden min-[360px]:w-[272px] sm:w-[320px] ${compact ? "h-[42px] min-[360px]:h-[48px] sm:h-[56px]" : "h-[50px] min-[360px]:h-[58px] sm:h-[68px]"}`}>
        <Image src="/images/deccan-mint-logo.png" alt="Deccan Mint" width={2172} height={724} sizes="(max-width: 359px) 232px, (max-width: 639px) 272px, 320px" className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2" />
      </span>
    </Link>
  );
}
