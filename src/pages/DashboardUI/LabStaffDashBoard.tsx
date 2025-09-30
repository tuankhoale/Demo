import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    TestTube,
    Plus,
    Calendar,
    User,
    Clock,
    CheckCircle
} from 'lucide-react';

const LabStaffDashboard = () => {
    const testsToProcess = [
        {
            id: "XN001",
            patientName: "Nguyễn Văn Nam",
            testType: "Xét nghiệm máu tổng quát",
            status: "Chờ xử lý",
            date: "2024-01-20",
            priority: "Cao"
        },
        {
            id: "XN002",
            patientName: "Trần Thị Mai",
            testType: "Xét nghiệm đường huyết",
            status: "Đang xử lý",
            date: "2024-01-20",
            priority: "Thường"
        },
        {
            id: "XN003",
            patientName: "Lê Văn Đức",
            testType: "Xét nghiệm cholesterol",
            status: "Chờ xử lý",
            date: "2024-01-19",
            priority: "Thấp"
        },
        {
            id: "XN004",
            patientName: "Phạm Thị Lan",
            testType: "Xét nghiệm nước tiểu",
            status: "Chờ xử lý",
            date: "2024-01-19",
            priority: "Cao"
        }
    ];

    const recentResults = [
        {
            id: "XN005",
            patientName: "Hoàng Văn Minh",
            testType: "Xét nghiệm gan",
            result: "Bình thường",
            date: "2024-01-18",
            updatedBy: "Bạn"
        },
        {
            id: "XN006",
            patientName: "Nguyễn Thị Hoa",
            testType: "Xét nghiệm thận",
            result: "Bất thường",
            date: "2024-01-17",
            updatedBy: "BS. Trần Mai"
        },
        {
            id: "XN007",
            patientName: "Võ Văn Tài",
            testType: "Xét nghiệm tim",
            result: "Bình thường",
            date: "2024-01-17",
            updatedBy: "Bạn"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Chờ xử lý':
                return 'bg-status-pending/10 text-status-pending border-status-pending/20';
            case 'Đang xử lý':
                return 'bg-status-processing/10 text-status-processing border-status-processing/20';
            case 'Hoàn thành':
                return 'bg-status-completed/10 text-status-completed border-status-completed/20';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'Cao':
                return 'bg-status-positive/10 text-status-positive border-status-positive/20';
            case 'Thường':
                return 'bg-status-processing/10 text-status-processing border-status-processing/20';
            case 'Thấp':
                return 'bg-muted text-muted-foreground border-border';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getResultColor = (result: string) => {
        switch (result) {
            case 'Bình thường':
                return 'bg-status-completed/10 text-status-completed border-status-completed/20';
            case 'Bất thường':
                return 'bg-status-positive/10 text-status-positive border-status-positive/20';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground">Lab Staff Dashboard</h1>
                    <p className="text-muted-foreground mt-2">
                        Quản lý xét nghiệm và cập nhật kết quả
                    </p>
                </div>
                <Button className="bg-gradient-medical text-primary-foreground shadow-medical">
                    <Plus className="mr-2 h-4 w-4" />
                    Thêm kết quả
                </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tests to Process */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TestTube className="h-5 w-5 text-medical-primary" />
                            Danh sách xét nghiệm cần xử lý
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {testsToProcess.map((test) => (
                                <div key={test.id} className="border border-border rounded-lg p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium text-foreground">{test.id}</div>
                                        <div className="flex items-center gap-2">
                                            <Badge className={getPriorityColor(test.priority)}>
                                                {test.priority}
                                            </Badge>
                                            <Badge className={getStatusColor(test.status)}>
                                                {test.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            <span className="font-medium">{test.patientName}</span>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            {test.testType}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(test.date).toLocaleDateString('vi-VN')}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" className="flex-1">
                                            Xem chi tiết
                                        </Button>
                                        <Button size="sm" className="flex-1">
                                            Cập nhật
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Results */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-status-completed" />
                            Kết quả xét nghiệm gần đây
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentResults.map((result) => (
                                <div key={result.id} className="border border-border rounded-lg p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium text-foreground">{result.id}</div>
                                        <Badge className={getResultColor(result.result)}>
                                            {result.result}
                                        </Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            <span className="font-medium">{result.patientName}</span>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            {result.testType}
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{new Date(result.date).toLocaleDateString('vi-VN')}</span>
                                            </div>
                                            <span>Cập nhật bởi: {result.updatedBy}</span>
                                        </div>
                                    </div>

                                    <Button size="sm" variant="outline" className="w-full">
                                        Xem báo cáo đầy đủ
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="shadow-card">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-medical-primary">12</div>
                        <div className="text-sm text-muted-foreground">Chờ xử lý</div>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-status-processing">8</div>
                        <div className="text-sm text-muted-foreground">Đang xử lý</div>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-status-completed">34</div>
                        <div className="text-sm text-muted-foreground">Hoàn thành hôm nay</div>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-status-positive">2</div>
                        <div className="text-sm text-muted-foreground">Cần xem lại</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LabStaffDashboard;