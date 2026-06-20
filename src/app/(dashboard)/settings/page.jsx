import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";
import { PreferencesForm } from "@/components/settings/preferences-form";
import { DraggableFeed } from "@/components/feed/draggable-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <PageContainer>
      <SectionHeader 
        title="Settings" 
        description="Manage your account settings and content preferences."
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <PreferencesForm />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feed Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-500">
                Drag and drop to reorder how feed sections appear on your dashboard.
              </p>
              <DraggableFeed />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
