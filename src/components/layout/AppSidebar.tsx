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
import { Microscope } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getMenuItemsByRole } from '@/config/menuConfig';

export function AppSidebar() {
  const location = useLocation();
  const { user } = useAuth();

  // Lấy menu items dựa trên role của user
  const menuItems = user ? getMenuItemsByRole(user.role) : [];

  // Định nghĩa label cho từng role
  const getGroupLabel = () => {
    if (!user) return 'Chức năng chính';

    switch (user.role) {
      case 'admin':
        return 'Quản trị hệ thống';
      case 'manager':
        return 'Quản lý';
      case 'lab staff':
        return 'Nhân viên phòng lab';
      case 'patient':
        return 'Dịch vụ bệnh nhân';
      default:
        return 'Chức năng chính';
    }
  };

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
            <p className="text-xs text-muted-foreground">
              {user ? `${user.name}` : 'Hệ thống quản lý'}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{getGroupLabel()}</SidebarGroupLabel>
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