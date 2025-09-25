import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: number;
  description?: string;
  color?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, description, color = 'medical-primary' }: StatsCardProps) {
  const getTrendIcon = () => {
    if (!trend || trend === 0) return Minus;
    return trend > 0 ? TrendingUp : TrendingDown;
  };

  const getTrendColor = () => {
    if (!trend || trend === 0) return 'text-muted-foreground';
    return trend > 0 ? 'text-status-completed' : 'text-destructive';
  };

  const TrendIcon = getTrendIcon();

  return (
    <Card className="shadow-card hover:shadow-elevated transition-shadow duration-300 animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg bg-${color}/10`}>
          <Icon className={`w-5 h-5 text-${color}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">{value}</div>
          {(trend !== undefined || description) && (
            <div className="flex items-center justify-between">
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
              {trend !== undefined && (
                <Badge variant="outline" className={`${getTrendColor()} border-0 bg-transparent p-0`}>
                  <TrendIcon className="w-3 h-3 mr-1" />
                  <span className="text-xs">
                    {trend > 0 ? '+' : ''}{trend}%
                  </span>
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}