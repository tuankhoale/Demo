import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TestTube, UserPlus, FileText, CheckCircle, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'test_completed',
    title: 'Hoàn thành xét nghiệm',
    description: 'Xét nghiệm máu cho BN Nguyễn Văn An đã hoàn thành',
    user: 'Kỹ thuật viên Lê Thị B',
    time: '15 phút trước',
    icon: TestTube,
    status: 'completed'
  },
  {
    id: 2,
    type: 'patient_added',
    title: 'Thêm bệnh nhân mới',
    description: 'Bệnh nhân Trần Thị C được thêm vào hệ thống',
    user: 'Tiếp tân Phạm Văn D',
    time: '1 giờ trước',
    icon: UserPlus,
    status: 'completed'
  },
  {
    id: 3,
    type: 'report_generated',
    title: 'Tạo báo cáo',
    description: 'Báo cáo thống kê tháng 1 đã được tạo',
    user: 'Bác sĩ Nguyễn Minh E',
    time: '2 giờ trước',
    icon: FileText,
    status: 'completed'
  },
  {
    id: 4,
    type: 'result_approved',
    title: 'Duyệt kết quả',
    description: 'Kết quả xét nghiệm BN Hoàng Văn F đã được duyệt',
    user: 'Bác sĩ Trần Thị G',
    time: '3 giờ trước',
    icon: CheckCircle,
    status: 'completed'
  },
  {
    id: 5,
    type: 'test_pending',
    title: 'Xét nghiệm chờ xử lý',
    description: 'Có 5 xét nghiệm đang chờ được thực hiện',
    user: 'Hệ thống',
    time: '4 giờ trước',
    icon: Clock,
    status: 'pending'
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-status-completed';
    case 'pending':
      return 'bg-status-pending';
    case 'processing':
      return 'bg-status-processing';
    default:
      return 'bg-muted';
  }
};

export function ActivityList() {
  return (
    <Card className="shadow-card animate-scale-in">
      <CardHeader>
        <CardTitle>Hoạt động gần đây</CardTitle>
        <CardDescription>
          Theo dõi các hoạt động mới nhất trong hệ thống
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${getStatusColor(activity.status)}/10`}>
                  <Icon className={`w-4 h-4 text-${getStatusColor(activity.status).replace('bg-', '')}`} />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{activity.title}</h4>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {activity.user.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{activity.user}</span>
                  </div>
                </div>
                
                {index < activities.length - 1 && (
                  <div className="absolute left-6 mt-8 h-6 w-px bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}