import {
    BarChart3,
    Users,
    TestTube,
    ClipboardCheck,
    FileText,
    UserCog,
    Settings,
    Home,
    User,
    FileCheck,
    Calendar,
    Bell,
} from 'lucide-react';
import { Role } from '../fakeDb';

export interface MenuItem {
    title: string;
    url: string;
    icon: any;
    permission?: string[];
}

export const menuConfig: Record<Role, MenuItem[]> = {
    admin: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Quản lý bệnh nhân',
            url: '/dashboard/patients',
            icon: Users,
        },
        {
            title: 'Quản lý xét nghiệm',
            url: '/dashboard/tests',
            icon: TestTube,
        },
        {
            title: 'Quản lý kết quả',
            url: '/dashboard/results',
            icon: ClipboardCheck,
        },
        {
            title: 'Quản lý nhân viên',
            url: '/dashboard/staff',
            icon: UserCog,
        },
        {
            title: 'Báo cáo',
            url: '/dashboard/reports',
            icon: FileText,
        },
        {
            title: 'Cài đặt',
            url: '/dashboard/settings',
            icon: Settings,
        },
    ],
    manager: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Quản lý bệnh nhân',
            url: '/dashboard/patients',
            icon: Users,
        },
        {
            title: 'Quản lý xét nghiệm',
            url: '/dashboard/tests',
            icon: TestTube,
        },
        {
            title: 'Quản lý kết quả',
            url: '/dashboard/results',
            icon: ClipboardCheck,
        },
        {
            title: 'Báo cáo',
            url: '/dashboard/reports',
            icon: FileText,
        },
        {
            title: 'Cài đặt',
            url: '/dashboard/settings',
            icon: Settings,
        },
    ],
    'lab staff': [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Xét nghiệm',
            url: '/dashboard/tests',
            icon: TestTube,
        },
        {
            title: 'Kết quả',
            url: '/dashboard/results',
            icon: ClipboardCheck,
        },
        {
            title: 'Lịch làm việc',
            url: '/dashboard/schedule',
            icon: Calendar,
        },
        {
            title: 'Cài đặt',
            url: '/dashboard/settings',
            icon: Settings,
        },
    ],
    patient: [
        {
            title: 'Trang chủ',
            url: '/dashboard',
            icon: Home,
        },
        {
            title: 'Thông tin cá nhân',
            url: '/dashboard/profile',
            icon: User,
        },
        {
            title: 'Xét nghiệm của tôi',
            url: '/dashboard/my-tests',
            icon: TestTube,
        },
        {
            title: 'Kết quả xét nghiệm',
            url: '/dashboard/my-results',
            icon: FileCheck,
        },
        {
            title: 'Lịch hẹn',
            url: '/dashboard/appointments',
            icon: Calendar,
        },
        {
            title: 'Thông báo',
            url: '/dashboard/notifications',
            icon: Bell,
        },
        {
            title: 'Cài đặt',
            url: '/dashboard/settings',
            icon: Settings,
        },
    ],
};

export const getMenuItemsByRole = (role: Role): MenuItem[] => {
    return menuConfig[role] || [];
};

