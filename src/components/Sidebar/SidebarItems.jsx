
import { SidebarSubItems } from "./SidebarSubItems";
import { Link } from "react-router-dom";
function SidebarItems({ items, setActiveItem, activeItem, iscollapes }) {
  const isChildActive = (children) => {
    return children?.includes(activeItem) ?? false;
  };

  return (
    <div>
      {items.map((item) => {
        const SidebarContent = (
          <SidebarSubItems
            key={item.title}
            icon={<item.icon size={20} />}
            title={item.title}
            optional={item.optional}
            height={
              item.children
                ? 44.19 * item.children.length + item.children.length
                : 1000
            }
            isActive={activeItem === item.title}
            hasActiveChild={item.children && isChildActive(item.children)}
            isOpen={activeItem === item.title}
            onClick={() => setActiveItem(item.title)}
            iscollapes={iscollapes}
          >
            {item.children && (
              <div className="flex flex-col gap-[1px] mt-[1px]">
                {item.children
                  .filter((child) => !child.comingSoon)
                  .map((child) => (
                    <Link key={child.name} to={child.link} className="">
                      <div className="hover:bg-sidebarColor-hover">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveItem(child.name);
                          }}
                          className={`flex cursor-pointer transition-colors duration-300 text-sm text-[#fff] py-3 pl-[60px] hover:bg-sidebarColor-hover  ${
                            activeItem === child.name
                              ? "text-white bg-slidebarColor px-2 py-1"
                              : "hover:text-white"
                          }`}
                        >
                          {child.name}
                        </div>
                      </div>
                      {child.border && (
                        <div className="mt-[1px] border-b-[1px] border-sidebarColor-hover"></div>
                      )}
                    </Link>
                  ))}

                {/* Render "Coming soon" children */}
                {item.children
                  .filter((child) => child.comingSoon)
                  .map((child) => (
                    <div
                      key={child.name}
                      className="flex justify-between hover:cursor-default transition-colors duration-300 text-sm text-[#919192] py-3 pl-[60px] "
                    >
                      {child.name}
                      <span className="text-xs mr-8 font-bold text-white">
                        Coming Soon
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </SidebarSubItems>
        );

        return item.link ? (
          <Link
            key={item.title}
            to={item.link}
            className="block transition-colors duration-300"
          >
            {SidebarContent}
          </Link>
        ) : (
          SidebarContent
        );
      })}
    </div>
  );
}

export default SidebarItems;
