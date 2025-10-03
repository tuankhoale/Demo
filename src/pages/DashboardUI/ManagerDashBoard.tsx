import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Users,
    UserCheck,
    FileText,
    ArrowRight,
    Settings

} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        {
            title: "Tổng số nhân viên",
            value: "24",
            description: "Nhân viên đang làm việc",
            icon: UserCheck,
            color: "text-medical-primary bg-medical-primary/10",
            onClick: () => navigate('/dashboard/staff')
        },
        {
            title: "Tổng số bệnh nhân",
            value: "2,847",
            description: "Bệnh nhân đã đăng ký",
            icon: Users,
            color: "text-status-processing bg-status-processing/10",
            onClick: () => navigate('/dashboard/patients')
        },
        {
            title: "Báo cáo trong tháng",
            value: "186",
            description: "Báo cáo đã hoàn thành",
            icon: FileText,
            color: "text-status-completed bg-status-completed/10",
            onClick: () => navigate('/dashboard/reports')
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-foreground">Manager Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    Tổng quan quản lý hệ thống xét nghiệm y tế
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group"
                        onClick={stat.onClick}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <div className={`p-3 rounded-xl ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                            <div className="space-y-1">
                                <div className="text-lg font-medium text-foreground">{stat.title}</div>
                                <p className="text-sm text-muted-foreground">{stat.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle>Thao tác nhanh</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button
                            variant="outline"
                            className="h-20 flex-col gap-2"
                            onClick={() => navigate('/dashboard/staff')}
                        >
                            <UserCheck className="h-6 w-6" />
                            <span className="text-sm">Quản lý nhân viên</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-20 flex-col gap-2"
                            onClick={() => navigate('/dashboard/patients')}
                        >
                            <Users className="h-6 w-6" />
                            <span className="text-sm">Quản lý bệnh nhân</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-20 flex-col gap-2"
                            onClick={() => navigate('/dashboard/reports')}
                        >
                            <FileText className="h-6 w-6" />
                            <span className="text-sm">Xem báo cáo</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-20 flex-col gap-2"
                            onClick={() => navigate('/dashboard/settings')}
                        >
                            <Settings className="h-6 w-6" />
                            <span className="text-sm">Cài đặt hệ thống</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManagerDashboard;