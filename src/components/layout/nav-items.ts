import {
  Briefcase,
  ClipboardCheck,
  FileText,
  Home,
  ListChecks,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  iconSrc: string;
}

export const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: Home,
    iconSrc: "/icons/Home-pri.png",
  },
  {
    id: "listings",
    label: "Listings",
    href: "/listings",
    icon: Briefcase,
    iconSrc: "/icons/Toolbox-pri.png",
  },
  {
    id: "users",
    label: "Users",
    href: "/users",
    icon: Users,
    iconSrc: "/icons/Profile-pri.png",
  },
  {
    id: "request",
    label: "Request",
    href: "/request",
    icon: FileText,
    iconSrc: "/icons/Scroll-pri.png",
  },
  {
    id: "applications",
    label: "Applications",
    href: "/applications",
    icon: ClipboardCheck,
    iconSrc: "/icons/Article-pri.png",
  },
  {
    id: "tasks",
    label: "Tasks",
    href: "/tasks",
    icon: ListChecks,
    iconSrc: "/icons/task-square-pri.png",
  },
];
