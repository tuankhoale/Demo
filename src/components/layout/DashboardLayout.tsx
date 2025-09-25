import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { TopBar } from '@/components/layout/TopBar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';

const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <TopBar />
        <main className="flex-1 p-6 animate-fade-in">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  );
};

export default DashboardLayout;