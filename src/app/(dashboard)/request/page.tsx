import { FileText } from "lucide-react";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export default function RequestPage() {
  return (
    <PagePlaceholder
      icon={FileText}
      title="Request"
      description="This section is out of scope for the assessment. Requests will live here."
    />
  );
}
