import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";

export const metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <SectionHeader 
        title="Your Analytics" 
        description="See your reading habits and content consumption."
      />
      {/* TODO: Add charts and analytics */}
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-gray-500">Analytics dashboard coming soon.</p>
      </div>
    </PageContainer>
  );
}
