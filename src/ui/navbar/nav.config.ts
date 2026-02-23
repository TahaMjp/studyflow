/**
 * nav.config.ts
 *
 * Centralized navigation configuration.
 * This prevents hardcoding links inside the Navbar component.
 */

export interface NavItemType {
  label: string;
  path: string;
}

export const navItems: NavItemType[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Features",
    path: "/features",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
];
