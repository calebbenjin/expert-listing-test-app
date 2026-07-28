import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { SalesOverviewCard } from "@/components/dashboard/sales-overview-card";
import { OverviewSummaryCard } from "@/components/dashboard/overview-summary-card";
import { SpotlightSection } from "@/components/dashboard/spotlight-section";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner name="Ahmed" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <SalesOverviewCard />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <OverviewSummaryCard endpoint="listings-overview" />
          <OverviewSummaryCard endpoint="user-overview" />
        </div>
      </div>

      <SpotlightSection />
    </div>
  );
}
