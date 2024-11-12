import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/logo-96x96-skyblue.svg";

export default function Logo() {
  return (
    <Link href="/" legacyBehavior passHref>
      <Image
        priority
        src={LogoSvg}
        height={32}
        width={32}
        alt="Qnan Icon"
      />
    </Link>

  )
}

