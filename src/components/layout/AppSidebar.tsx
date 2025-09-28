import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  BarChart3,
  Users,
  TestTube,
  ClipboardCheck,
  FileText,
  UserCog,
  Settings,
  Microscope,
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'Bệnh nhân',
    url: '/patients',
    icon: Users,
  },
  {
    title: 'Xét nghiệm',
    url: '/tests',
    icon: TestTube,
  },
  {
    title: 'Kết quả',
    url: '/results',
    icon: ClipboardCheck,
  },
  {
    title: 'Báo cáo',
    url: '/reports',
    icon: FileText,
  },
  {
    title: 'Nhân viên',
    url: '/staff',
    icon: UserCog,
  },
  {
    title: 'Cài đặt',
    url: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-medical p-2 rounded-xl">
            <Microscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-medical bg-clip-text text-transparent">
              Xét nghiệm
            </h2>
            <p className="text-xs text-muted-foreground">Hệ thống quản lý</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chức năng chính</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${isActive
                          ? 'bg-medical-secondary text-medical-primary font-medium shadow-sm'
                          : 'hover:bg-medical-secondary/50 text-muted-foreground hover:text-foreground'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}