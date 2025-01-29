import AppSidebar from "@/app/blocks/sidebar/app-sidebar"
import AppSidebarNav from "@/app/blocks/sidebar/app-sidebar-nav"
import { Heading, SidebarInset, SidebarProvider } from "ui"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar intent="default" />
      <SidebarInset>
        <AppSidebarNav />
        <div className="p-4 lg:p-6">
          <Heading>Default</Heading>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
