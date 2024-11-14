import Actions from "./actions";
import HeaderSheet from "./header-sheet";
import Logo from "./logo";
import NavList from "./nav-list";

export default function Header() {

  return (
    <header
      className={"fixed top-0 z-50 flex h-14 items-center bg-white sm:static sm:h-[92px]"}
    >
      <div className="flex flex-row items-center justify-between container flex-1">
        <Logo />
        <NavList />
        <Actions />
      </div>
      <HeaderSheet />
    </header>

  )
}
