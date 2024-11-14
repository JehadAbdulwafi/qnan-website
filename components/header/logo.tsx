import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/qnan-text-sky.svg";

export default function Logo() {
  return (
    <Link href="/" legacyBehavior passHref>
      <div>
        <Image
          priority
          src={LogoSvg}
          width={120}
          height={48}
          alt="Qnan Icon"
        />
      </div>
    </Link>

  )
}

