import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  TestTube, 
  ClipboardCheck, 
  UserCheck, 
  TrendingUp,
  Activity,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { ActivityList } from '@/components/dashboard/ActivityList';

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Tổng quan hoạt động hệ thống xét nghiệm
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Tổng bệnh nhân"
          value="2,847"
          icon={Users}
          trend={12}
          description="Tháng này"
          color="medical-primary"
        />
        <StatsCard
          title="Xét nghiệm hôm nay"
          value="156"
          icon={TestTube}
          trend={8}
          description="So với hôm qua"
          color="status-processing"
        />
        <StatsCard
          title="Kết quả chờ duyệt"
          value="23"
          icon={ClipboardCheck}
          trend={-5}
          description="Cần xem xét"
          color="status-pending"
        />
        <StatsCard
          title="Nhân viên online"
          value="18/24"
          icon={UserCheck}
          trend={0}
          description="Đang hoạt động"
          color="status-completed"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartCard
          title="Tỷ lệ kết quả xét nghiệm"
          description="Phân bố kết quả 7 ngày qua"
          type="pie"
        />
        <ChartCard
          title="Số xét nghiệm theo ngày"
          description="Thống kê tuần này"
          type="bar"
        />
      </div>

      {/* Activity and Notifications */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ActivityList />
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-status-pending" />
              <span>Thông báo quan trọng</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Bảo trì hệ thống</span>
                <span className="text-xs text-muted-foreground">2h trước</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Hệ thống sẽ bảo trì vào 23:00 - 01:00 đêm nay
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Cập nhật mới</span>
                <span className="text-xs text-muted-foreground">1 ngày</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Phiên bản 2.1.0 đã được phát hành
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Đào tạo nhân viên</span>
                <span className="text-xs text-muted-foreground">3 ngày</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Khóa đào tạo về quy trình mới bắt đầu tuần sau
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;