import Actions from "./actions";
import HeaderSheet from "./header-sheet";
import Logo from "./logo";
import NavList from "./nav-list";

export default function Header() {

  return (
    <header
      className={"sticky top-0 z-30 flex h-14 items-center gap-4 py-4 px-4 border-b bg-background sm:static sm:h-auto sm:px-32"}
    >
      <div className="flex flex-row items-center justify-between flex-1">
        <Logo />
        <NavList />
        <Actions />
      </div>
      <HeaderSheet />
    </header>

  )
}
