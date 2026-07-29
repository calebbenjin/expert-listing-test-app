export interface HeaderIcon {
  id: string;
  src: string;
  label: string;
}

export const headerIcons: HeaderIcon[] = [
  { id: "comments", src: "/icons/comments-icon.png", label: "Comments" },
  { id: "waitlist", src: "/icons/waitlist-icon.png", label: "Waitlist" },
  {
    id: "document",
    src: "/icons/document-text-icon.png",
    label: "Documents",
  },
  {
    id: "payout",
    src: "/icons/payout-center-icon.png",
    label: "Payout Center",
  },
  { id: "marketplace", src: "/icons/marketplace-icon.png", label: "Marketplace" },
];
