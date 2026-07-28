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
}

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/", icon: Home },
  { id: "listings", label: "Listings", href: "/listings", icon: Briefcase },
  { id: "users", label: "Users", href: "/users", icon: Users },
  { id: "request", label: "Request", href: "/request", icon: FileText },
  {
    id: "applications",
    label: "Applications",
    href: "/applications",
    icon: ClipboardCheck,
  },
  { id: "tasks", label: "Tasks", href: "/tasks", icon: ListChecks },
];
