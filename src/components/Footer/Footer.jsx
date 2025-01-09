import {
  PiLifebuoyLight,
  PiFileTextLight,
  PiShoppingCart,
} from "react-icons/pi";
export default function Footer() {
  return (
    <footer className="w-full p-[9.5px] bg-white border-[1px]">
      <div className=" flex flex-col xs:flex-row gap-4 xs:gap-0 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Limitless Web App Kit
          </a>
        </p>
        <nav className="flex items-center gap-0 md:gap-3 ">
          <a
            href="#"
            className="text-sm bg-white hover:bg-gray-100 px-4 py-[9px] rounded-md transition-bg duration-200 flex gap-2 items-center"
          >
            <PiLifebuoyLight size={20} />
            <span className="hidden md:block">Support</span>
          </a>

          <a
            href="#"
            className="text-sm hover:bg-gray-100 px-4 py-[9px] rounded-md transition-all duration-200 flex gap-2 items-center"
          >
            <PiFileTextLight size={20} />
            <span className="hidden md:block">Docs</span>
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 px-4 py-[9px] rounded-md transition-all duration-200 flex gap-2 items-center"
          >
            <PiShoppingCart size={20} />
            <span className="hidden md:block">Purchase</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
