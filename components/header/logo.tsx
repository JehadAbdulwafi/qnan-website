import Image from "next/image";
import LogoSvg from "@/public/qnan-text-sky.svg";
import NLink from "../link";

export default function Logo() {
  return (
    <NLink href="/" legacyBehavior passHref>
      <div>
        <Image
          priority
          src={LogoSvg}
          width={120}
          height={48}
          alt="Qnan Icon"
        />
      </div>
    </NLink>

  )
}

