import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/sidebar/app-sidebar";
import AppNavbar from "./_components/navbar/app-navbar";
import { RootLayoutProps } from "@/types/type";


const BrowserLayout = ({ children }: RootLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar
       />

      <main className="w-full h-full">
        <AppNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default BrowserLayout;
