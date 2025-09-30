import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Calendar,
    FileText,
    Activity,
    Clock,
    User,
    Phone,
    Mail,
    MapPin,
    TestTube,
    Heart,
    TrendingUp
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const PatientDashboard = () => {

    const { user } = useAuth();

    if (!user) {
        return <div>Đang tải thông tin...</div>;
    }

    if (user.role !== "patient") {
        return <div>Bạn không có quyền truy cập Patient Dashboard</div>;
    }



    const recentTests = [
        {
            id: "XN001",
            name: "Xét nghiệm máu tổng quát",
            date: "2024-01-20",
            status: "Hoàn thành",
            result: "Bình thường"
        },
        {
            id: "XN002",
            name: "Xét nghiệm đường huyết",
            date: "2024-01-18",
            status: "Hoàn thành",
            result: "Cao"
        },
        {
            id: "XN003",
            name: "Xét nghiệm cholesterol",
            date: "2024-01-15",
            status: "Đang xử lý",
            result: "Chờ kết quả"
        }
    ];

    const upcomingAppointments = [
        {
            id: "HT001",
            doctor: "BS. Trần Thị Mai",
            specialty: "Tim mạch",
            date: "2024-01-25",
            time: "09:00",
            type: "Tái khám"
        },
        {
            id: "HT002",
            doctor: "BS. Lê Văn Đức",
            specialty: "Nội khoa",
            date: "2024-02-02",
            time: "14:30",
            type: "Khám định kỳ"
        }
    ];

    const healthMetrics = [
        { label: "Huyết áp", value: "130/85", status: "Cao", trend: "up" },
        { label: "Nhịp tim", value: "72 bpm", status: "Bình thường", trend: "stable" },
        { label: "Cân nặng", value: "70 kg", status: "Bình thường", trend: "down" },
        { label: "BMI", value: "23.1", status: "Bình thường", trend: "stable" }
    ];

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'hoàn thành':
            case 'bình thường':
                return 'bg-status-completed text-status-completed';
            case 'đang xử lý':
            case 'chờ kết quả':
                return 'bg-status-processing text-status-processing';
            case 'cao':
                return 'bg-status-positive text-status-positive';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up':
                return <TrendingUp className="h-4 w-4 text-status-positive" />;
            case 'down':
                return <TrendingUp className="h-4 w-4 text-status-completed rotate-180" />;
            case 'stable':
            default:
                return <Activity className="h-4 w-4 text-status-processing" />;
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground">Patient Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Xin chào, {user.name}! Theo dõi sức khỏe và kết quả xét nghiệm của bạn</p>
                </div>
                <Button className="bg-gradient-medical text-primary-foreground shadow-medical">
                    <Calendar className="mr-2 h-4 w-4" />
                    Đặt lịch xét nghiệm
                </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Profile Card */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-medical-primary" />
                            Hồ sơ cá nhân
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback className="bg-medical-secondary text-medical-primary text-lg">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span>{user.email}</span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full mt-4">
                            Chỉnh sửa hồ sơ
                        </Button>
                    </CardContent>
                </Card>

                {/* Test History Card */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TestTube className="h-5 w-5 text-medical-accent" />
                            Lịch sử xét nghiệm
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentTests.map((test) => (
                            <div key={test.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                                <div className="flex-1">
                                    <div className="font-medium text-foreground">{test.name}</div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {new Date(test.date).toLocaleDateString('vi-VN')}
                                    </div>
                                </div>
                                <Badge className={getStatusColor(test.status)}>
                                    {test.status === 'Hoàn thành' ? 'Completed' : test.status === 'Đang xử lý' ? 'Pending' : 'Pending'}
                                </Badge>
                            </div>
                        ))}
                        <Button variant="outline" className="w-full mt-4">
                            <FileText className="mr-2 h-4 w-4" />
                            Xem tất cả kết quả
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Tests & Appointments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Test Results */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TestTube className="h-5 w-5 text-medical-accent" />
                            Kết quả xét nghiệm gần đây
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentTests.map((test) => (
                            <div key={test.id} className="border border-border rounded-lg p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium">{test.name}</h4>
                                    <Badge className={getStatusColor(test.status)}>
                                        {test.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>ID: {test.id}</span>
                                    <span>{new Date(test.date).toLocaleDateString('vi-VN')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Kết quả:</span>
                                    <Badge variant="outline" className={getStatusColor(test.result)}>
                                        {test.result}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                        <Button variant="outline" className="w-full mt-4">
                            <FileText className="mr-2 h-4 w-4" />
                            Xem tất cả kết quả
                        </Button>
                    </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-medical-primary" />
                            Lịch hẹn sắp tới
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                            <div key={appointment.id} className="border border-border rounded-lg p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium">{appointment.doctor}</h4>
                                    <Badge variant="secondary">{appointment.type}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(appointment.date).toLocaleDateString('vi-VN')}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{appointment.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button variant="outline" className="w-full mt-4">
                            <Calendar className="mr-2 h-4 w-4" />
                            Xem lịch hẹn đầy đủ
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle>Thao tác nhanh</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-20 flex-col gap-2">
                            <Calendar className="h-6 w-6" />
                            <span className="text-sm">Đặt lịch khám</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                            <FileText className="h-6 w-6" />
                            <span className="text-sm">Tải kết quả</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                            <User className="h-6 w-6" />
                            <span className="text-sm">Cập nhật hồ sơ</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                            <Activity className="h-6 w-6" />
                            <span className="text-sm">Theo dõi sức khỏe</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PatientDashboard;