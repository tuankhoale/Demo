import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChartCardProps {
  title: string;
  description?: string;
  type: 'pie' | 'bar';
}

const pieData = [
  { name: 'Âm tính', value: 65, color: 'bg-status-negative' },
  { name: 'Dương tính', value: 25, color: 'bg-status-positive' },
  { name: 'Chưa xác định', value: 10, color: 'bg-status-pending' },
];

const barData = [
  { name: 'T2', tests: 45 },
  { name: 'T3', tests: 52 },
  { name: 'T4', tests: 48 },
  { name: 'T5', tests: 61 },
  { name: 'T6', tests: 55 },
  { name: 'T7', tests: 67 },
  { name: 'CN', tests: 43 },
];

export function ChartCard({ title, description, type }: ChartCardProps) {
  const maxValue = Math.max(...barData.map(item => item.tests));

  return (
    <Card className="shadow-card animate-scale-in">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          {type === 'pie' ? (
            <div className="space-y-4 w-full">
              <div className="grid grid-cols-3 gap-4">
                {pieData.map((item, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className={`w-16 h-16 rounded-full mx-auto ${item.color} flex items-center justify-center text-white font-bold`}>
                      {item.value}%
                    </div>
                    <div className="text-sm font-medium">{item.name}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                {pieData.map((item, index) => (
                  <Badge key={index} variant="outline" className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span>{item.name}: {item.value}%</span>
                  </Badge>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="flex justify-between items-end h-48 px-4">
                {barData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="text-xs font-medium">{item.tests}</div>
                    <div 
                      className="bg-medical-primary rounded-t-lg w-8 transition-all duration-500"
                      style={{ height: `${(item.tests / maxValue) * 160}px` }}
                    ></div>
                    <div className="text-xs text-muted-foreground">{item.name}</div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-medical-primary/10">
                  <span>Tổng: {barData.reduce((sum, item) => sum + item.tests, 0)} xét nghiệm</span>
                </Badge>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}