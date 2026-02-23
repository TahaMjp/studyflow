/**
 * NavItem.tsx
 *
 * Reusable navigation link component.
 * Uses NavLink to detect active route.
 */

import React from "react";
import { NavLink } from "react-router-dom";
import type { NavItemType } from "./nav.config";

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
  relative
  text-sm font-medium
  transition-all duration-300
  ${isActive ? "text-black" : "text-neutral-600 hover:text-black"}
  after:absolute
  after:-bottom-1
  after:left-0
  after:h-[1.5px]
  after:w-0
  after:bg-black
  after:transition-all
  after:duration-300
  hover:after:w-full
  ${isActive ? "after:w-full" : ""}
  `
      }
    >
      {item.label}
    </NavLink>
  );
};

export default NavItem;
