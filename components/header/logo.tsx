import Image from "next/image";
import LogoSvgText from "@/public/qnan-text-sky.svg";
import LogoSvg from "@/public/logo-96x96-skyblue.svg";
import NLink from "../link";

export default function Logo() {
  return (
    <NLink href="/" legacyBehavior passHref>
      <div className="hidden sm:flex">
        <Image
          priority
          src={LogoSvgText}
          width={120}
          height={48}
          alt="Qnan Icon"
          className=""
        />
      </div>

      <div className="sm:hidden flex">
        <Image
          priority
          src={LogoSvg}
          width={32}
          height={32}
          alt="Qnan Icon"
          className=""
        />
      </div>
    </NLink>

  )
}

