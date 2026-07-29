import { ListChecks } from "lucide-react";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export default function TasksPage() {
  return (
    <PagePlaceholder
      icon={ListChecks}
      title="Tasks"
      description="This section is out of scope for the assessment. Tasks will live here."
    />
  );
}
